import styled from 'styled-components';
import { FilterAgentsStateProps } from './FilterAgentsState.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledWrapperCheckedAgent = styled.div<FilterAgentsStateProps>`
  width: 295px;
  height: 50px;
  display: flex;
  flex-direction: initial;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2px;

  & > :nth-child(1) {
    height: fit-content;
    background: ${({ checkedAgents, theme }) =>
      checkedAgents ? theme.Colors.purples[1] : theme.Colors.grays[8]};
  }
  & > :nth-child(2) {
    width: 24px;
    height: 24px;
    margin-left: 15px;
    border-radius: 50%;
    background-color: ${({ position, theme }) =>
      mySelector(position === 'one', theme.Colors.green[4], null) ||
      mySelector(position === 'two', theme.Colors.orange[3], null) ||
      mySelector(position === 'three', theme.Colors.orange[3], null)};
    & > div {
      & * {
        & > svg {
          width: ${({ position }) =>
            mySelector(position === 'one', '13px', null) ||
            mySelector(position === 'two', '9', null) ||
            mySelector(position === 'three', '9', null)};
          height: 11px;
          margin: ${({ position }) =>
            mySelector(position === 'one', '6px', null) ||
            mySelector(position === 'two', '6.5px', null) ||
            mySelector(position === 'three', '7.5px', null)};
          & > path {
            fill-opacity: 1;
            fill: ${({ theme }) => theme.Colors.grays[10]};
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
