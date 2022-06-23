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
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { Channels, ChatStatus } from '../../../../../../models/chat/chat';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';

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
  onHandleToggle,
  resetHandle,
  setFilterChat,
  handleSearchChatToday,
  setOrderByInteraction,
  setClientIdConversation,
  setIsOpenModal,
  totalChats,
}) => {
  // const dispatch = useAppDispatch();
  const [timeChat, setTimeChat] = useState(Date.now());
  const [accessToken] = useLocalStorage('AccessToken', '');

  const { countOnConversation, countPause, countPending, countFinished } =
    useAppSelector((state) => state.monitor.monitorTodayChatState);

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

  const handleOption = async (ClientId: string) => {
    setClientIdConversation(ClientId);
    setIsOpenModal(true);
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
            onClick={() => setFilterChat('')}
            name="Todos los Chats Hoy">
            <Text color="black">Chats de hoy</Text>
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
              onHandleToggle={onHandleToggle}
              resetHandle={resetHandle}
            />
          </div>
        </div>
      </StyledHeaderFirstSection>
      <div>
        <WrapperCard>
          <ChatsCardMonitor
            name="Pendiente"
            number={countPending}
            position="ASSIGNMENT_PENDING"
            icon="/icons/user_question.svg"
            setFilterChat={setFilterChat}
          />
          <ChatsCardMonitor
            name="En Conversación"
            number={countOnConversation}
            position="ON_CONVERSATION"
            icon="/icons/en-conversacion.svg"
            setFilterChat={setFilterChat}
          />
          <ChatsCardMonitor
            name="Chats en Pausa"
            number={countPause}
            position="ON_PAUSE"
            icon="/icons/pause.svg"
            setFilterChat={setFilterChat}
          />
          <ChatsCardMonitor
            name="Finalizadas"
            number={countFinished}
            position="FINISHED"
            icon="/icons/like.svg"
            setFilterChat={setFilterChat}
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
                  onClick={() => handleOption(_id)}>
                  <div>
                    <SVGIcon
                      iconFile={`/icons/${
                        channel === Channels.CHAT_API || channel === 'WhatsApp'
                          ? 'whatsapp'
                          : channel.toLocaleLowerCase()
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
