import { FC } from 'react';
import { ISearchByState } from './SearchByState.interface';
import { State } from '../../../Monitor/Components/FilterState/FilterState';
import {
  StyledSearchByState,
  WrapperSearchState,
} from './SearchByState.styled';
import { Text } from '../../../../atoms/Text/Text';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';

export const SearchByState: FC<ISearchByState> = ({
  filterState,
  filterByState,
}) => {
  return (
    <WrapperSearchState>
      {State?.map(({ id, name, status }) => (
        <StyledSearchByState
          checkedState={filterState.indexOf(id) !== -1}
          key={id}
          position={status}>
          <Checkbox
            checked={filterState.indexOf(id) !== -1}
            onClick={() => filterByState(id)}
          />
          <BadgeMolecule>
            <Text>{name}</Text>
          </BadgeMolecule>
        </StyledSearchByState>
      ))}
    </WrapperSearchState>
  );
};
