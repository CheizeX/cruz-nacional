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
import { ChatStatus } from '../../../../../../models/chat/chat';

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
  onHandleToggle,
  resetHandle,
}) => {
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
          <Text color="black">Chats de hoy</Text>
          <div>{chats && chats.length}</div>
        </span>
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
      </StyledHeaderFirstSection>
      <div>
        <WrapperCard>
          <ChatsCardMonitor
            name="Pendiente"
            number={countPending}
            position="ASSIGNMENT_PENDING"
            icon="/icons/user_question.svg"
          />
          <ChatsCardMonitor
            name="En Conversación"
            number={countOnConversation}
            position="ON_CONVERSATION"
            icon="/icons/en-conversacion.svg"
          />
          <ChatsCardMonitor
            name="Chats en Pausa"
            number={countPause}
            position="ON_PAUSE"
            icon="/icons/pause.svg"
          />
          <ChatsCardMonitor
            name="Finalizadas"
            number={countFinished}
            position="FINISHED"
            icon="/icons/user_question.svg"
          />
        </WrapperCard>
        <WrapperAgents>
          <span>
            <span>
              <Text color="black">Canal</Text>
              <Text color="black">Estado</Text>
            </span>
            <span>
              <Text color="black">Agente</Text>
              <Text color="black">Últ. Interacción</Text>
            </span>
          </span>
          <div>
            {chats?.map(
              (
                { _id, assignedAgent, channel, status, createdAt, isPaused },
                index,
              ) => (
                <StyledAgentSection
                  key={_id}
                  index={index}
                  position={status}
                  isColorPaused={isPaused}>
                  <div>
                    <SVGIcon iconFile={`/icons/${channel}.svg`} />
                  </div>
                  <span>
                    <BadgeMolecule>
                      {handleStatus(status, isPaused)}
                    </BadgeMolecule>
                  </span>
                  <span>
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
                    {!assignedAgent
                      ? 'Sin Asignación'
                      : assignedAgent.name.slice(0, 16)}
                  </span>
                  <span>
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
                  </span>
                </StyledAgentSection>
              ),
            ) ?? []}
          </div>
        </WrapperAgents>
      </div>
    </StyledMonitorFirstSection>
  );
};
