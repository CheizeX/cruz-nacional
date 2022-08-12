import { FC, useEffect, useState } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { FilterInteractions } from '../FilterInteractions/FilterInteractions';
import {
  StyledMonitorFirstSection,
  StyledHeaderFirstSection,
  WrapperAgents,
  WrapperCard,
  StyledAgentSection,
} from './MonitorFirstSection.styled';
import { IFirstSetionProps } from './MonitorFirstSection.interface';
import { ChatsCardMonitor } from '../ChatsCardMonitor/ChatsCardMonitor';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { Channels, Chat, ChatStatus } from '../../../../../../models/chat/chat';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { TooltipPosition } from '../../../../atoms/Tooltip/tooltip.interface';
import { Tooltip } from '../../../../atoms/Tooltip/Tooltip';
import { readChat } from '../../../../../../api/chat';
import { setInfoByChat } from '../../../../../../redux/slices/monitor/monitor-chats';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const MonitorFirstSection: FC<IFirstSetionProps> = ({
  onChange,
  dateAgent,
  chats,
  filterStatus,
  filterChannels,
  filterAgents,
  statusAgent,
  byChannels,
  IDAgents,
  orderByInteraction,
  resetHandle,
  setFilterChat,
  handleSearchChatToday,
  setOrderByInteraction,
  setIsOpenModal,
  setOptionFilter,
  totalChats,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [timeChat, setTimeChat] = useState(Date.now());
  const [accessToken] = useLocalStorage('AccessToken', '');

  const { chatsToday } = useAppSelector(
    (state) => state.monitor.monitorTodayChatState,
  );

  // funcion que trae un solo chat por id
  const getChat = async (id: string) => {
    try {
      const response = await readChat(id);
      if (response.success === false) {
        dispatch(setInfoByChat({} as Chat));
      } else {
        dispatch(setInfoByChat(response));
        setIsOpenModal(true);
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleStatus = (status: string, pause: boolean) => {
    if (ChatStatus.ON_CONVERSATION === status && pause === false) {
      return 'En Conversación';
    }
    if (ChatStatus.FINISHED === status && !pause) {
      return 'Finalizada';
    }
    if (ChatStatus.ASSIGNMENT_PENDING === status && !pause) {
      return 'Pendiente';
    }
    return 'Chat en Pausa';
  };

  const handleClick = () => {
    setOrderByInteraction(!orderByInteraction);
  };

  const handleFilterCard = (arg: string) => {
    setOptionFilter(false);
    setFilterChat(arg);
  };

  const handleResetAllFilters = () => {
    setOptionFilter(false);
    setFilterChat('');
  };

  useEffect(() => {
    const intervalToGetActualTime = setInterval(() => {
      setTimeChat(Date.now());
    }, 10000);
    return () => clearInterval(intervalToGetActualTime);
  }, []);

  return (
    <StyledMonitorFirstSection>
      <StyledHeaderFirstSection>
        <span>
          <button
            type="button"
            onClick={() => handleResetAllFilters()}
            name="Todos los Chats Hoy">
            <Tooltip text="Todos los chats" position={TooltipPosition.left}>
              <Text color="black">Chats de hoy</Text>
            </Tooltip>
          </button>
          <div>{totalChats}</div>
        </span>
        <div>
          <ContainerInput
            setFocus={() => null}
            onChange={handleSearchChatToday}
            placeHolder="Buscar por agente o cliente..."
            LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
          />
          <div>
            <button type="button" onClick={handleClick}>
              <SVGIcon iconFile="/icons/watch.svg" />
              {orderByInteraction ? (
                <SVGIcon iconFile="/icons/upArrow.svg" />
              ) : (
                <SVGIcon iconFile="/icons/downArrow.svg" />
              )}
            </button>
            <FilterInteractions
              dateAgent={dateAgent}
              onChange={onChange}
              filterAgents={filterAgents}
              filterChannels={filterChannels}
              filterStatus={filterStatus}
              statusAgent={statusAgent}
              byChannels={byChannels}
              IDAgents={IDAgents}
              resetHandle={resetHandle}
              setOptionFilter={setOptionFilter}
              setFilterChat={setFilterChat}
            />
          </div>
        </div>
      </StyledHeaderFirstSection>
      <div>
        <WrapperCard>
          <ChatsCardMonitor
            name="Pendiente"
            number={
              chatsToday &&
              chatsToday.filter(
                (item) => item.status === ChatStatus.ASSIGNMENT_PENDING,
              ).length
            }
            position="ASSIGNMENT_PENDING"
            icon="/icons/user_question.svg"
            setFilterChat={handleFilterCard}
          />
          <ChatsCardMonitor
            name="En Conversación"
            number={
              chatsToday &&
              chatsToday.filter(
                (item) => item.status === ChatStatus.ON_CONVERSATION,
              ).length
            }
            position="ON_CONVERSATION"
            icon="/icons/en-conversacion.svg"
            setFilterChat={handleFilterCard}
          />
          <ChatsCardMonitor
            name="Chats en Pausa"
            number={
              chatsToday &&
              chatsToday.filter(
                (item) =>
                  item.status === ChatStatus.ON_CONVERSATION && item.isPaused,
              ).length
            }
            position="ON_PAUSE"
            icon="/icons/pause.svg"
            setFilterChat={handleFilterCard}
          />
          <ChatsCardMonitor
            name="Finalizadas"
            number={
              chatsToday &&
              chatsToday.filter((item) => item.status === ChatStatus.FINISHED)
                .length
            }
            position="FINISHED"
            icon="/icons/like.svg"
            setFilterChat={handleFilterCard}
          />
        </WrapperCard>
        <WrapperAgents>
          <div>
            <Text color="black">Canal</Text>
            <Text color="black">Estado</Text>
            <Text color="black">Cliente</Text>
            <Text color="black">Agente</Text>
            <Text color="black">Últ. Interacción</Text>
            <Text color="black">Opciones</Text>
          </div>
          <div>
            {chats?.map(
              (
                {
                  _id,
                  assignedAgent,
                  channel,
                  status,
                  createdAt,
                  isPaused,
                  client,
                },
                index,
              ) => (
                <StyledAgentSection
                  key={_id}
                  index={index}
                  position={status}
                  isColorPaused={isPaused}
                  onClick={() => getChat(_id)}>
                  <div>
                    <SVGIcon
                      iconFile={`/icons/${
                        channel === Channels.CHAT_API ||
                        channel === Channels.WHATSAPP
                          ? 'whatsapp'
                          : channel?.toLocaleLowerCase()
                      }.svg`}
                    />
                  </div>
                  <div>
                    <BadgeMolecule>
                      {handleStatus(status, isPaused)}
                    </BadgeMolecule>
                  </div>
                  <div>
                    <Text>{client.name && client.name.slice(0, 10)}</Text>
                  </div>
                  <div>
                    {dateAgent
                      ?.filter(
                        (item) =>
                          assignedAgent && item._id === assignedAgent._id,
                      )
                      .map(
                        (ele, count) =>
                          (ele.urlAvatar ? (
                            <img
                              key={count.toString()}
                              src={`${ele.urlAvatar}?token=${accessToken}`}
                              alt={ele.name}
                            />
                          ) : (
                            <div key={count.toString()}>
                              <SVGIcon iconFile="/icons/unknown_user.svg" />
                            </div>
                          )) ?? <SVGIcon iconFile="/icons/unknown_user.svg" />,
                      )}
                    <Text>
                      {!assignedAgent
                        ? 'Sin Asignación'
                        : assignedAgent.name.slice(0, 8)}
                    </Text>
                  </div>
                  <div>
                    {status !== 'ASSIGNMENT_PENDING' ? (
                      <SVGIcon iconFile="/icons/small_watch.svg" />
                    ) : null}
                    {status !== 'ASSIGNMENT_PENDING'
                      ? Math.floor(
                          (timeChat - new Date(createdAt).getTime()) /
                            (1000 * 60),
                        ) > 59 &&
                        (Math.floor(
                          (timeChat - new Date(createdAt).getTime()) /
                            (1000 * 60),
                        ) > 119 ? (
                          <Text>
                            Hace{' '}
                            {Math.floor(
                              (timeChat - new Date(createdAt).getTime()) /
                                (1000 * 60) /
                                60,
                            )}{' '}
                            hs.
                          </Text>
                        ) : (
                          <Text>
                            Hace{' '}
                            {Math.floor(
                              (timeChat - new Date(createdAt).getTime()) /
                                (1000 * 60) /
                                60,
                            )}{' '}
                            h.
                          </Text>
                        ))
                      : 'Pendiente'}
                    {status !== 'ASSIGNMENT_PENDING'
                      ? Math.floor(
                          (Date.now() - new Date(createdAt).getTime()) /
                            (1000 * 60),
                        ) <= 59 && (
                          <Text>
                            Hace{' '}
                            {Math.floor(
                              (timeChat - new Date(createdAt).getTime()) /
                                (1000 * 60),
                            )}{' '}
                            min.
                          </Text>
                        )
                      : ' '}
                  </div>
                  <div>
                    <div>
                      <SVGIcon iconFile="/icons/list_icons.svg" />
                    </div>
                  </div>
                </StyledAgentSection>
              ),
            ) ?? []}
          </div>
        </WrapperAgents>
      </div>
    </StyledMonitorFirstSection>
  );
};
