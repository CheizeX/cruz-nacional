import styled from 'styled-components';
import { IFilterStateProps } from './SearchByState.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const WrapperSearchState = styled.div`
  margin: 16px 0 2px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledSearchByState = styled.div<IFilterStateProps>`
  width: 256px;
  height: 38px;
  display: flex;
  flex-direction: initial;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2px;
  & > :nth-child(1) {
    height: fit-content;
    background: ${({ checkedState, theme }) =>
      checkedState ? theme.Colors.purples[1] : theme.Colors.grays[8]};
  }
  & > :nth-child(2) {
    margin-left: 15px;
    background-color: ${({ position, theme }) =>
      mySelector(
        position === 'ASSIGNMENT_PENDING',
        theme.Colors.orange[3],
        null,
      ) ||
      mySelector(position === 'ON_CONVERSATION', theme.Colors.blue[1], null) ||
      mySelector(position === 'FINISHED', theme.Colors.grays[6], null)};
    & > span {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      font-size: ${({ theme }) => theme.fontSize[10]};
      line-height: 12px;
    }
  }
`;
