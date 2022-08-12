import { FC } from 'react';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { StyledFilterState } from './FilterState.styled';
import { ChatStatus } from '../../../../../../models/chat/chat';
import { IFilterStateAgents } from './FilterState.interface';

export const State = [
  {
    id: 1,
    status: ChatStatus.ASSIGNMENT_PENDING,
    position: 'one',
    name: 'Pendiente',
    icon: 'user_question',
  },
  {
    id: 2,
    status: ChatStatus.ON_CONVERSATION,
    position: 'three',
    name: 'En Conversación',
    icon: 'en-conversacion',
  },
  {
    id: 3,
    status: ChatStatus.FINISHED,
    position: 'four',
    name: 'Finalizado',
    icon: 'like',
  },
];

export const FilterState: FC<IFilterStateAgents> = ({
  statusAgent,
  handleFilterStatus,
}) => {
  return (
    <>
      {State?.map(({ id, name, icon, position, status }) => (
        <StyledFilterState
          checkedState={statusAgent.indexOf(status) !== -1}
          key={id}
          position={position}>
          <Checkbox
            checked={statusAgent.indexOf(status) !== -1}
            onClick={() => handleFilterStatus(status)}
          />
          <SVGIcon iconFile={`/icons/${icon}.svg`} />
          <Text color="black">{name}</Text>
        </StyledFilterState>
      ))}
    </>
  );
};
