import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SpinnerDotted } from 'spinners-react';
import {
  StyledSearchForChats,
  StyledTitle,
  WrapperReports,
} from './SearchForChats.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ISearchForChats } from './SearchForChats.interface';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { Channels } from '../../../../../../models/chat/chat';

// const getDateString = (date: Date) => `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
export const SearchForChats: FC<ISearchForChats> = ({
  datsReports,
  isHasMore,
  setIsModalConversationInReports,
  setClientIdInReports,
  setSkip,
}) => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const handleInfoChat = (idChat: string) => {
    setClientIdInReports(idChat);
    setIsModalConversationInReports(true);
  };
  return (
    <StyledSearchForChats>
      <StyledTitle>
        <Text>Canal</Text>
        <Text>Estado</Text>
        <Text>Agente</Text>
        <Text>Cliente</Text>
        <Text>Fecha</Text>
        <Text>Opciones</Text>
      </StyledTitle>
      <InfiniteScroll
        dataLength={datsReports.length}
        next={() => setSkip((prevSkip) => prevSkip + 100)}
        loader={<SpinnerDotted color="#8769FF" />}
        hasMore={isHasMore}>
        <div>
          {datsReports &&
            datsReports.map(
              (
                { _id, channel, status, assignedAgent, createdAt, client },
                index,
              ) => (
                <WrapperReports
                  key={index.toString()}
                  index={index}
                  position={status}
                  onClick={() => handleInfoChat(_id)}>
                  <div>
                    <SVGIcon
                      iconFile={`/icons/${
                        channel === Channels.CHAT_API || channel === 'WhatsApp'
                          ? 'whatsapp'
                          : channel.toLocaleLowerCase()
                      }.svg`}
                    />
                  </div>
                  <span>
                    <BadgeMolecule>
                      {status === 'ASSIGNMENT_PENDING' ? 'Pendiente' : null}
                      {status === 'ON_CONVERSATION' ? 'En Conversación' : null}
                      {status === 'FINISHED' ? 'Finalizada' : null}
                    </BadgeMolecule>
                  </span>
                  <Text>{!assignedAgent ? '  ' : assignedAgent.name}</Text>
                  <Text>{client.name}</Text>
                  <Text>
                    {new Date(createdAt).getDate()}{' '}
                    {months[new Date(createdAt).getMonth()]}{' '}
                    {new Date(createdAt).getFullYear()}
                  </Text>
                  <div>
                    <button type="button">
                      <SVGIcon iconFile="/icons/list_icons.svg" />
                    </button>
                  </div>
                </WrapperReports>
              ),
            )}
        </div>
      </InfiniteScroll>
    </StyledSearchForChats>
  );
};
