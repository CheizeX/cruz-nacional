import styled from 'styled-components';
import { IFilterAvailableProps } from './FilterByAgentsAvailable.interface';

export const ContainerFilterByAgent = styled.div`
  & > div {
    margin-top: 6px;
    margin-bottom: 12px;
    button:last-child {
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[7]};
            }
          }
        }
      }
    }
  }
`;
export const StyledWrapperFilterByAgents = styled.div`
  width: 293px;
  height: 235px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  padding: 8px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterByAgents = styled.div<IFilterAvailableProps>`
  width: 277px;
  height: 56px;
  border-radius: 10px;
  margin-bottom: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 15px;
  display: flex;
  & > :nth-child(1) {
    & > svg {
      stroke: ${({ theme }) => theme.Colors.grays[10]};
    }
    background: ${({ checkedAgent, theme }) =>
      checkedAgent ? theme.Colors.purples[1] : theme.Colors.grays[8]};
  }
  & > :nth-child(2) {
    width: 24px;
    height: 24px;
    margin-left: 18px;
    margin-right: 8px;
    border-radius: 50%;
    object-fit: cover;
    & > div {
      & * {
        & > svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  & > :nth-child(3) {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
`;
