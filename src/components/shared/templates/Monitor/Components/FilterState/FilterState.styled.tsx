import styled from 'styled-components';
import { IFilterStateProps } from './FilterState.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledFilterState = styled.div<IFilterStateProps>`
  width: 295px;
  height: 50px;
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
    width: 25px;
    height: 25px;
    margin-left: 15px;
    & > div {
      & * {
        & > svg {
          width: 100%;
          height: 100%;
          & > path {
            fill-opacity: 1;
            fill: ${({ position, theme }) =>
              mySelector(position === 'one', theme.Colors.orange[3], null) ||
              mySelector(position === 'two', theme.Colors.blue[1], null) ||
              mySelector(position === 'three', theme.Colors.blue[1], null) ||
              mySelector(position === 'four', theme.Colors.grays[6], null)};
          }
        }
      }
    }
  }
  & > span {
    margin-left: 9px;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    padding-top: 1px;
  }
`;
