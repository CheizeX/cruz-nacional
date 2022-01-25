import { FC } from 'react';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  FilterAgentsStateProps,
  FilterByState,
} from './FilterAgentsState.interface';
import { StyledWrapperCheckedAgent } from './FilterAgentsState.styled';
import { UserStatus } from '../../../../../../models/users/status';

export const AgentStatus = [
  {
    id: 1,
    position: 'one',
    status: UserStatus.AVAILABLE,
    name: 'Disponible',
    icon: 'user_question',
  },
  {
    id: 2,
    position: 'two',
    status: UserStatus.LUNCH,
    name: 'En Pausa - Almuerzo',
    icon: 'utensils',
  },
  {
    id: 3,
    position: 'three',
    status: UserStatus.BATHROOM,
    name: 'En Pausa - Baño',
    icon: 'toile',
  },
];
export const FilterAgentsState: FC<FilterAgentsStateProps & FilterByState> = ({
  filterByState,
  stateByAgent,
}) => {
  return (
    <>
      {AgentStatus?.map(({ id, name, icon, position }) => (
        <StyledWrapperCheckedAgent
          position={position}
          checkedAgents={stateByAgent.indexOf(id) !== -1}
          key={id}>
          <Checkbox
            checked={stateByAgent.indexOf(id) !== -1}
            onClick={() => filterByState(id)}
          />
          <SVGIcon iconFile={`/icons/${icon}.svg`} />
          <Text color="black">{name}</Text>
        </StyledWrapperCheckedAgent>
      ))}
    </>
  );
};
