import styled from 'styled-components';
import { IChatFilterProps } from '../ChatsFilter/ChatFilter/ChatFilter.interface';
import { ShowOnlyPaused } from '../../ChatsSection/ChatsSection.interface';

export const StyledChatsListHeader = styled.div<
  IChatFilterProps & ShowOnlyPaused
>`
  width: 288px;
  height: 20px;
  margin: 14px auto 6px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > :nth-child(2) {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    height: 20px;
    fill: ${({ theme, showOnlyPausedChats }) =>
      showOnlyPausedChats ? theme.Colors.green[1] : theme.Colors.grays[6]};
    margin-bottom: 5px;
    & :hover {
      cursor: pointer;
      & * {
        fill: ${({ theme, showOnlyPausedChats }) =>
          showOnlyPausedChats ? theme.Colors.grays[6] : theme.Colors.grays[4]};
      }
    }
    & :active {
      cursor: pointer;
      & * {
        fill: ${({ theme, showOnlyPausedChats }) =>
          showOnlyPausedChats ? theme.Colors.grays[4] : theme.Colors.grays[6]};
      }
    }
  }
  & > span {
    width: 65px;
    height: 100%;
    display: flex;
    & div {
      z-index: 1;
      & > div {
        & > div {
          & > div {
            & :nth-child(1) {
              & > :nth-child(2) {
              }
            }
          }
          & > :nth-child(2) {
            & > :first-child {
              & > button {
                height: 32px;
                margin: 0 4px;
              }
            }
            & > :last-child {
              & > div {
                & > div {
                  & button {
                    width: 22px;
                  }
                }
              }
            }
          }
          & > :nth-child(3) {
            & button {
              position: relative;
              height: 40px;
              width: 120px;
            }
          }
        }
      }
    }
    & button {
      justify-content: center;
      justify-content: space-space-around;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      & :hover {
        cursor: pointer;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[4]};
        }
      }
      & :active {
        cursor: pointer;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[6]};
        }
      }
    }

    & > :first-child {
      display: flex;
      justify-content: center;
      margin-left: 10px;
      & > :first-child {
        margin-left: 5px;
      }
      & > :last-child {
        margin-left: -9px;
      }
    }
  }
`;

export const StyledChatsListHeaderLeft = styled.div`
  width: 288px;
  height: 20px;
  display: flex;
  width: 290px;
  margin-bottom: 3px;
  & > :first-child {
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
`;

export const StyledUsersCounter = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.purples[2]};
  border-radius: 50%;
  color: ${({ theme }) => theme.Colors.grays[10]};
  display: flex;
  height: 20px;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  margin-left: 6px;
  width: 20px;
`;
