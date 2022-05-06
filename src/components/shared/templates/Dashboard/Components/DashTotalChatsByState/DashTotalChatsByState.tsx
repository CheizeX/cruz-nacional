import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledHeaderAgent } from '../Agents/Agents.styled';
import { Text } from '../../../../atoms/Text/Text';
import { ChatsStateGraph } from '../ChatsStateGraph/ChatsStateGraph';
import { ChatsStateCard } from '../ChatsStateCard/ChatsStateCard';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import {
  setFinishedTodayChats,
  setPendingTodayChats,
  setOnConversationTodayChats,
  setTodayAllChats,
  getTodayChats,
  getChatsByPeriod,
} from '../../../../../../redux/slices/dashboard/dashboard-chats-filter';
import { websocketContext } from '../../../../../../chat';
import { Chat, ChatStatus } from '../../../../../../models/chat/chat';

export interface StyledNumberAndTypeProps {
  position?: string;
}

export interface ITotalChatsByState {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  close?: boolean;
}

const StyledTotalChatsByState = styled.div<StyledNumberAndTypeProps>`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  height: 220px;
  width: 1032px;
  margin-bottom: 20px;
`;

const StyledModalHeader = styled(StyledHeaderAgent)`
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 65px;
  margin: 0;
  padding: 0;
  padding-left: 24px;
`;

const StyledModalBody = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 135px;
  padding: 0 20px;
  margin: 0;
  width: 100%;
`;

const StyledDetails = styled.div`
  height: 91px;
  width: 820px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 11px 0px 11px 10px;
  & div {
    z-index: 0;
  }
  & > :nth-child(3) {
    & > div {
      & * {
        & > svg {
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
            opacity: 0.3;
          }
        }
      }
    }
  }
`;

export const DashTotalChatsByState: FC = () => {
  const socket: any = React.useContext(websocketContext);
  const dispatch = useAppDispatch();
  const { todayChats } = useAppSelector(
    (state) => state.dashboardFilterChatsByDate,
  );

  const getNewChatEvent = React.useCallback(async () => {
    await socket?.on('newChatEvent', (data: Chat[]) => {
      dispatch(
        setFinishedTodayChats(
          data.filter((chat: Chat) => chat.status === ChatStatus.FINISHED),
        ),
      );
      dispatch(
        setPendingTodayChats(
          data.filter(
            (chat: Chat) => chat.status === ChatStatus.ASSIGNMENT_PENDING,
          ),
        ),
      );
      dispatch(
        setOnConversationTodayChats(
          data.filter(
            (chat: Chat) => chat.status === ChatStatus.ON_CONVERSATION,
          ),
        ),
      );

      dispatch(setTodayAllChats(data));
      dispatch(getChatsByPeriod('0/today'));
    });
  }, [socket]);

  React.useEffect(() => {
    dispatch(getChatsByPeriod('0/today'));
    dispatch(getTodayChats());
    getNewChatEvent();
  }, [dispatch, getNewChatEvent]);

  return (
    <StyledTotalChatsByState>
      <StyledModalHeader>
        <Text>Total chats por estado</Text>
        {/* <Dropdown
          onClick={() => setClose(false)}
          triggerElement={() => (
            <BadgeMolecule
              leftIcon={() => <SVGIcon iconFile="/icons/candelar_alt.svg" />}
              rightIcon={() => (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )}>
              <Text>Hoy</Text>
            </BadgeMolecule>
          )}>
          <FilterDateDashboard
            setDatePicker={setDatePicker}
            datePicker={datePicker}
            setClose={setClose}
          /> */}
        {/* <div
            style={{
              visibility: datePicker === true ? 'visible' : 'hidden',
            }}>
            <FIlterByPeriod
              setDatePicker={setDatePicker}
              datePicker={datePicker}
              setClose={setClose}
              close={close}
            />
          </div> */}
        {/* </Dropdown> */}
      </StyledModalHeader>
      <StyledModalBody>
        <ChatsStateGraph />
        <StyledDetails>
          <ChatsStateCard
            key="pendings"
            name="Pendientes"
            number={
              todayChats.length > 0
                ? todayChats
                    ?.filter(
                      (chat) => chat.status === ChatStatus.ASSIGNMENT_PENDING,
                    )
                    .length.toString()
                : '0'
            }
            position="one"
            icon="/icons/user_question.svg"
          />
          <ChatsStateCard
            key="onConversation"
            name="En conversación"
            number={
              todayChats.length > 0
                ? todayChats
                    ?.filter(
                      (chat) =>
                        chat.status === ChatStatus.ON_CONVERSATION &&
                        chat.isPaused === false,
                    )
                    .length.toString()
                : '0'
            }
            position="two"
            icon="/icons/en-conversacion.svg"
          />
          <ChatsStateCard
            key="Chats en Pausa"
            name="Chats en Pausa"
            number={
              todayChats.length > 0
                ? todayChats
                    ?.filter(
                      (chat) =>
                        chat.status === ChatStatus.ON_CONVERSATION &&
                        chat.isPaused === true,
                    )
                    .length.toString()
                : '0'
            }
            position="four"
            icon="/icons/pause.svg"
          />
          <ChatsStateCard
            key="finished"
            name="Finalizadas"
            number={
              todayChats.length > 0
                ? todayChats
                    ?.filter((chat) => chat.status === ChatStatus.FINISHED)
                    .length.toString()
                : '0'
            }
            position="three"
            icon="/icons/like.svg"
          />
        </StyledDetails>
      </StyledModalBody>
    </StyledTotalChatsByState>
  );
};
