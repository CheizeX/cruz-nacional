import styled, { css } from 'styled-components';
import { IChatTransfer } from './ChatTransfer.interface';

export const StyledChatTransfer = styled.div`
  width: 591px;
  height: 512px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 24px 0;
`;
export const StyledChatTransferHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 26px;
  & > button {
    & > div {
      width: 13px;
      & * {
        & > svg {
          cursor: pointer;
          height: 13px;
          width: 13px;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[7]};
          }
        }
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
  }
`;
export const StyledChatTransferBodySection = styled.div`
  height: 367px;
  display: flex;
  & > :first-child {
    border-right: 1px solid ${({ theme }) => theme.Colors.grays[8]};
    width: 295px;
    padding: 18px;
    & > :nth-child(1) {
      width: 263px;
      & > button {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[7]};
            }
          }
        }
      }
    }
    & > :nth-child(2) {
      padding: 8px;
      margin-top: 12px;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  & > :last-child {
    width: 295px;
    padding: 20px;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 17px;
      & > div {
        width: 52px;
        height: 52px;
        display: flex;
        justify-content: center;
        margin: auto;
        & > div {
          & > div {
            & > svg {
              width: 52px;
              height: 52px;
            }
          }
        }
      }
    }
    & > :nth-child(2) {
      text-align: center;
      display: flex;
      justify-content: center;
      margin: 4px 0 12px 0;
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[16]};
      line-height: 17px;
    }
    & > :nth-child(4) {
      display: flex;
      justify-content: center;
      margin: 10px auto;
    }
    & > :nth-child(5) {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
    & > :nth-child(6) {
      justify-content: center;
      align-items: center;
      align-content: center;
      display: flex;
      flex-direction: column;
      padding-top: 10px;
    }
  }
`;
export const StyledContainerAgents = styled.div`
  width: 263px;
  height: 281px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
`;
export const StyledCardAgentAvailable = styled.button<IChatTransfer>`
  width: 246px;
  height: 56px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.Colors.grays[1]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  font-size: ${({ theme }) => theme.fontSize[14]};
  line-height: 17px;
  cursor: pointer;
  display: flex;
  justify-content: start;
  ${({ focusedAgents }) =>
    focusedAgents &&
    css<IChatTransfer>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `};
  & > :nth-child(1) {
    position: relative;
    left: 20px;
    top: 11px;
    & > div {
      & * {
        & > svg {
          height: 34px;
          width: 34px;
        }
      }
    }
  }
  & > :nth-child(2) {
    left: 68px;
    display: flex;
    align-items: center;
    top: 20px;
    position: relative;
  }
  :hover {
    background-color: ${({ theme }) => theme.Colors.purples[1]};
    color: ${({ theme }) => theme.Colors.grays[10]};
  }
`;

export const StyledChatTransferFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  height: 56px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 0px 25px;
  align-items: flex-end;
`;
