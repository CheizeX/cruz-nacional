import { FC } from 'react';
import {
  StyledSearchForChats,
  StyledTitle,
  WrapperReports,
} from './SearchForChats.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ISearchForChats } from './SearchForChats.interface';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';

// const getDateString = (date: Date) => `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
export const SearchForChats: FC<ISearchForChats> = ({ datsReports }) => {
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
  return (
    <StyledSearchForChats>
      <StyledTitle>
        <Text>Canal</Text>
        <Text>Estado</Text>
        <Text>Agente</Text>
        <Text>Fecha</Text>
      </StyledTitle>
      <div>
        {datsReports &&
          datsReports.map(
            ({ _id, channel, status, assignedAgent, createdAt }, index) => (
              <WrapperReports key={_id} index={index} position={status}>
                <div>
                  <SVGIcon iconFile={`/icons/${channel}.svg`} />
                  <Text>{channel}</Text>
                </div>
                <span>
                  <BadgeMolecule>
                    {status === 'ASSIGNMENT_PENDING' ? 'Pendiente' : null}
                    {status === 'ON_CONVERSATION' ? 'En Conversación' : null}
                    {status === 'FINISHED' ? 'Finalizada' : null}
                  </BadgeMolecule>
                </span>
                <Text>{!assignedAgent ? '  ' : assignedAgent.name}</Text>
                <Text>
                  {new Date(createdAt).getDate()}{' '}
                  {months[new Date(createdAt).getMonth()]}{' '}
                  {new Date(createdAt).getFullYear()}
                </Text>
              </WrapperReports>
            ),
          )}
      </div>
    </StyledSearchForChats>
  );
};
