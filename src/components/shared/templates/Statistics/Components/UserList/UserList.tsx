import { FC, useState } from 'react';
import {
  StyledWrapperUserList,
  StyledHeaderUserList,
  StyledBodyUserList,
  StyledFilterUser,
} from './UserList.styled';
import { Text } from '../../../../atoms/Text/Text';
// import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IUserList } from './UserList.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';

export const UserList: FC<IUserList> = ({ userDate }) => {
  const [changeOfView, setChangeOfView] = useState<string>('');
  const { userList } = useAppSelector((state) => state.userStatisticsState);

  return (
    <StyledWrapperUserList>
      <StyledHeaderUserList>
        <div>
          <Text color="black">
            Total de{' '}
            {changeOfView === 'today' ? 'usuarios' : 'usuarios por agente'}
          </Text>
          <div>
            {changeOfView === 'today'
              ? userList[0]?.quantity ?? 0
              : userDate[0]?.quantity ?? 0}
          </div>
        </div>
        <div>
          <div>
            <button type="button">
              {/* <SVGIcon iconFile="/icons/list_icons.svg" /> */}
            </button>
            <StyledFilterUser type={changeOfView}>
              <button type="button" onClick={() => setChangeOfView('today')}>
                Todos
              </button>
              <button type="button" onClick={() => setChangeOfView('agent')}>
                Agente
              </button>
            </StyledFilterUser>
          </div>
        </div>
      </StyledHeaderUserList>
      <StyledBodyUserList>
        <div>
          <Text>Usuario</Text>
          <Text>Id. Personal</Text>
          <Text>Agente</Text>
          <Text>Cantidad</Text>
        </div>
        <div>
          {changeOfView === 'today'
            ? userList[0]?.data?.map((item, index) => (
                <div key={index.toString()}>
                  <Text>{item.userName.slice(0, 10)}</Text>
                  <Text>{item.userId.slice(0, 16)}</Text>
                  <Text>{item.agentName.slice(0, 10)}</Text>
                  <Text>1</Text>
                </div>
              ))
            : userDate[0]?.users?.map((item, index) => (
                <div key={index.toString()}>
                  <Text>{item.user.name.slice(0, 10)}</Text>
                  <Text>{item.user.id.slice(0, 16)}</Text>
                  <Text>{item.agentName.slice(0, 10)}</Text>
                  <Text>{item.total}</Text>
                </div>
              ))}
        </div>
      </StyledBodyUserList>
    </StyledWrapperUserList>
  );
};
