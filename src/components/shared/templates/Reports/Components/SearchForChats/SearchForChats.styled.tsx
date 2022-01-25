import styled from 'styled-components';
import { IContainerReports } from './SearchForChats.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledSearchForChats = styled.div`
  max-height: 551px;
  & > :nth-child(2) {
    overflow: scroll;
    max-height: 551px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  position: relative;
  min-height: 40px;
  align-items: center;
  width: 680px;
  z-index: 1;
  margin-left: 24px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    line-height: ${({ theme }) => theme.fontSize[14]};
    width: 25%;
    display: flex;
    justify-content: center;
  }
`;
export const WrapperReports = styled.div<IContainerReports>`
  width: 679px;
  height: 56px;
  border-radius: 10px;
  margin: auto;
  background-color: ${({ theme, index }) =>
    index && index % 2 !== 0 ? theme.Colors.grays[10] : theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  & > div:first-child {
    height: 33px;
    display: flex;
    align-items: center;
    & > div {
      & > div {
        & > div {
          & > svg {
            width: 31px;
            height: 32px;
          }
        }
      }
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
  & > :nth-child(1) {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  & > :nth-child(2) {
    width: 25%;
    display: flex;
    justify-content: center;
    & > div {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      font-size: ${({ theme }) => theme.fontSize[10]};
      line-height: 12px;
      background-color: ${({ position, theme }) =>
        mySelector(
          position === 'ASSIGNMENT_PENDING',
          theme.Colors.orange[3],
          null,
        ) ||
        mySelector(
          position === 'ON_CONVERSATION',
          theme.Colors.green[1],
          null,
        ) ||
        mySelector(position === 'FINISHED', theme.Colors.grays[6], null)};
    }
  }
  & > :nth-child(3) {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  & > :nth-child(4) {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
  }
`;
