import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ContainerWithOutTags } from '../../../molecules/ContainerWithOutTags/ContainerWithOutTags';
import { IEditTagProps } from './EditUserTag.interface';
import { ContainerTags, ContainerChecked } from './EditUserTag.styled';
import { setDeleteTagContainer } from '../../../../../redux/slices/users/user-update-container-tags';
import { useAppDispatch } from '../../../../../redux/hook/hooks';

export const EditUserTag: FC<IEditTagProps> = ({
  setOpenNewUser,
  setUserActive,
  setUsers,
  titleHeader,
}) => {
  const handlerUserActiveTag = (arg: string, num: number, title: string) => {
    setUserActive(num);
    setOpenNewUser(arg);
    setUsers(title);
  };
  const { updateContainerTags } = useSelector(
    (state: RootState) => state.users.updateContainerTagState,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <Text color="black">
          Total asignadas:{' '}
          {`${updateContainerTags ? updateContainerTags.length : 0}`}
        </Text>
        <button
          type="button"
          onClick={() =>
            handlerUserActiveTag('Modificar Etiquetas', 1, `${titleHeader}`)
          }>
          <SVGIcon iconFile="/icons/pen.svg" />
        </button>
      </div>
      <ContainerTags>
        {updateContainerTags && updateContainerTags.length === 0 ? (
          <ContainerWithOutTags />
        ) : (
          updateContainerTags.map(({ _id, name, color }) => (
            <ContainerChecked key={_id} color={color}>
              <span>{name}</span>
              <button
                type="button"
                onClick={() => dispatch(setDeleteTagContainer(_id as any))}>
                <SVGIcon iconFile="/icons/times.svg" />
              </button>
            </ContainerChecked>
          ))
        )}
      </ContainerTags>
    </>
  );
};
