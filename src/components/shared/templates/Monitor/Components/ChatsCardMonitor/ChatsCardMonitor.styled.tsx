import styled from 'styled-components';
import { ICardContainer } from './ChatsCardMonitor.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledCardMonitor = styled.div<ICardContainer>`
  position: relative;
  background-color: ${({ position, theme }) =>
    mySelector(
      position === 'ASSIGNMENT_PENDING',
      theme.Colors.orange[3],
      null,
    ) ||
    mySelector(position === 'ON_CONVERSATION', theme.Colors.blue[1], null) ||
    mySelector(position === 'FINISHED', theme.Colors.grays[6], null) ||
    mySelector(position === 'AVAILABLE', theme.Colors.green[4], null) ||
    mySelector(position === 'LUNCH', theme.Colors.orange[3], null) ||
    mySelector(position === 'ON_PAUSE', theme.Colors.green[1], null) ||
    mySelector(position === 'BATHROOM', theme.Colors.orange[3], null)};
  height: 71px;
  width: 140px;
  margin: 24px 8px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & :nth-child(3) {
    & > div {
      & * {
        & > svg {
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
            opacity: 0.3;
          }
        }
      }
    }
  }
  & > :first-child {
    font-size: ${({ theme }) => theme.fontSize[32]};
    font-weight: ${({ theme }) => theme.fontWeight[700]};
  }
  & > :nth-child(2) {
    margin-top: 5px;
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[700]};
  }
  & > div {
    right: 12px;
    top: 2px;
    position: absolute;
    width: 37px;
    height: 32px;
    & * {
      width: 37px;
      height: 32px;
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
    }
  }
`;
