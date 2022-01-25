import { FC, useCallback, useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import {
  StyledWrapperAgent,
  StyledHeaderAgent,
  StyledAgent,
} from './Agents.styled';
import { IContainerReview, IPropsAgents } from './Agents.interface';
import { FilterDateDashboard } from '../FilterDate/FilterDate';
import { FIlterByPeriod } from '../FIlterByPeriod/FIlterByPeriod';
import { Chat, ChatStatus } from '../../../../../../models/chat/chat';
import { setDataUser } from '../../../../../../redux/slices/users/user-management';
import { readingUsers } from '../../../../../../api/users';
import { UserStatus } from '../../../../../../models/users/status';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { setReviewByAgent } from '../../../../../../redux/slices/dashboard/dashboard-review';
import { UserRole } from '../../../../../../models/users/role';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { User } from '../../../../../../models/users/user';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';

export const Agents: FC<IPropsAgents & IContainerReview> = ({
  setDatePicker,
  datePicker,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selectedComponent,
  setSelectedComponent,
  setComponentReview,
}) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  const [accessToken] = useLocalStorage('AccessToken', '');

  const { chatsByPeriod } = useAppSelector(
    (state) => state.dashboardFilterChatsByDate,
  );
  const { usersData } = useAppSelector((state) => state.users.useQueryState);
  const { dateName } = useAppSelector(
    (state) => state.dashboardFilterChatsByDate,
  );
  const containerAgent = usersData.filter(
    (item) => item.role === UserRole.AGENT,
  );
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleClick = () => {
    setSelectedComponent('AGENT');
    setIsComponentVisible(true);
  };

  const handleToggle = (id: string) => {
    dispatch(setReviewByAgent(id));
    setComponentReview(true);
  };

  const dataApi = useCallback(async () => {
    try {
      const currentDta = await readingUsers(UserStatus.ALL);
      if (currentDta.success === false) {
        dispatch(setDataUser([]));
      } else {
        dispatch(setDataUser(currentDta));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);

  useEffect(() => {
    dataApi();
  }, [dataApi]);

  return (
    <StyledWrapperAgent>
      <StyledHeaderAgent>
        <Text>Chats finalizados</Text>
        <div>
          <button type="button" onClick={handleClick}>
            <BadgeMolecule
              leftIcon={() => <SVGIcon iconFile="/icons/candelar_alt.svg" />}
              rightIcon={() =>
                isComponentVisible ? (
                  <SVGIcon iconFile="/icons/chevron-square-down.svg" />
                ) : (
                  <SVGIcon iconFile="/icons/chevron-square-up.svg" />
                )
              }>
              <Text>{dateName}</Text>
            </BadgeMolecule>
          </button>
          {isComponentVisible && datePicker === 0 && (
            <div ref={ref}>
              <FilterDateDashboard
                setDatePicker={setDatePicker}
                datePicker={datePicker}
              />
            </div>
          )}
          {isComponentVisible && datePicker === 1 && (
            <div ref={ref}>
              <FIlterByPeriod
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                setDatePicker={setDatePicker}
                datePicker={datePicker}
                selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent}
                setIsComponentVisible={setIsComponentVisible}
              />
            </div>
          )}
          {isComponentVisible && datePicker === 2 && (
            <div ref={ref}>
              <FIlterByPeriod
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                setDatePicker={setDatePicker}
                datePicker={datePicker}
                selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent}
                setIsComponentVisible={setIsComponentVisible}
              />
            </div>
          )}
        </div>
      </StyledHeaderAgent>
      <span>
        <Text color="#2A2A2A">Agente</Text>
        <Text color="#2A2A2A">Cantidad</Text>
      </span>
      <div>
        <div>
          {(containerAgent?.length > 0 &&
            containerAgent.map((user: User, index) => (
              <StyledAgent key={user._id} index={index}>
                <div>
                  {user.urlAvatar && user.urlAvatar !== '' ? (
                    <img
                      src={`${user.urlAvatar}?token=${accessToken}`}
                      alt={user.name.slice(0, 7)}
                    />
                  ) : (
                    <SVGIcon iconFile="/icons/unknown_user.svg" />
                  )}
                  <span>
                    {user.name
                      .slice(0, 1)
                      .toUpperCase()
                      .concat(
                        user.name.slice(1, user.name.length).toLowerCase(),
                      )}
                  </span>
                </div>
                <div>
                  <div>
                    <span>
                      {chatsByPeriod?.filter(
                        (chat: Chat) =>
                          chat.status === ChatStatus.FINISHED &&
                          chat.assignedAgent &&
                          chat.assignedAgent._id === user._id,
                      ).length ?? 0}
                    </span>
                  </div>
                  <button
                    disabled={
                      chatsByPeriod?.filter(
                        (chat: Chat) =>
                          chat.status === ChatStatus.FINISHED &&
                          chat.assignedAgent._id === user._id,
                      ).length === 0
                    }
                    onClick={() => handleToggle(user._id)}
                    type="button">
                    <SVGIcon iconFile="/icons/bars-graphic.svg" />
                  </button>
                </div>
              </StyledAgent>
            ))) ??
            []}
        </div>
      </div>
    </StyledWrapperAgent>
  );
};
