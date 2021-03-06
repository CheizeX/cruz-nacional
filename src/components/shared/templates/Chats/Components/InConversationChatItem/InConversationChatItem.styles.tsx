/* eslint-disable sonarjs/no-identical-functions */
import styled, { css } from 'styled-components';
import { ITrafficLight } from '../../../../../../models/chat/chat';
import { StyledPendingWrapperProps } from '../../ChatsSection/ChatsSection.interface';

export const StyledInConversationContainer = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  height: 500px;
  width: 304px;
  margin: 0 auto;
  padding-top: 5px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledInConversationWrapper = styled.div<StyledPendingWrapperProps>`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  min-height: 77px;
  height: fit-content;
  width: 281px;
  margin: 6px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 12px 0 0 0;
  // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: ${({ trafficLight }) =>
    // eslint-disable-next-line no-nested-ternary
    trafficLight === ITrafficLight.YELLOW
      ? 'twinkleYellow'
      : trafficLight === ITrafficLight.RED
      ? 'twinkleRed'
      : 'none'};

  @keyframes twinkleYellow {
    0%,
    100% {
      box-shadow: 0px 0px 20px ${({ theme }) => theme.Colors.orange[6]};
    }
    50% {
      box-shadow: 0px 0px 0px ${({ theme }) => theme.Colors.orange[6]};
    }
  }
  @keyframes twinkleRed {
    0%,
    100% {
      box-shadow: 0px 0px 20px ${({ theme }) => theme.Colors.orange[1]};
    }
    50% {
      box-shadow: 0px 0px 0px ${({ theme }) => theme.Colors.orange[1]};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.Colors.purples[2]};
    cursor: pointer;
    box-shadow: 0 0 5px rgb(155, 16, 247);
    & > button {
      & > :nth-child(2) {
        & > span {
          color: ${({ theme }) => theme.Colors.grays[10]};
        }
      }
      & > :nth-child(3) {
        & > div {
          & > span {
            color: ${({ theme }) => theme.Colors.grays[10]};
          }
          & path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
          }
        }
      }
    }
  }
  &:active {
    background-color: ${({ theme }) => theme.Colors.purples[2]};
  }

  ${({ pausedItem }) =>
    pausedItem &&
    css<StyledPendingWrapperProps>`
      background-color: ${({ theme }) => theme.Colors.green[1]};
      outline: 2px solid ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      & > button {
        & > :first-child {
          & > :first-child {
            & > div {
              & > div {
                & > svg {
                  background-color: ${({ theme }) => theme.Colors.grays[3]};
                  & path {
                    color: ${({ theme }) => theme.Colors.grays[10]};
                    fill: ${({ theme }) => theme.Colors.grays[10]};
                  }
                }
              }
            }
          }
        }
        & > :nth-child(2) {
          & > span {
            color: ${({ theme }) => theme.Colors.grays[9]};
          }
        }
        & > :nth-child(3) {
          & > div {
            & > span {
              color: ${({ theme }) => theme.Colors.grays[9]};
            }
            & path {
              fill: ${({ theme }) => theme.Colors.grays[9]};
            }
          }
        }
      }
      &:active {
        background-color: ${({ theme }) => theme.Colors.purples[1]};
      }
    `}

  ${({ focusedItem }) =>
    focusedItem &&
    css<StyledPendingWrapperProps>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      & > button {
        & > :nth-child(2) {
          & > span {
            color: ${({ theme }) => theme.Colors.grays[10]};
          }
        }
        & > :nth-child(3) {
          & > div {
            & > span {
              color: ${({ theme }) => theme.Colors.grays[10]};
            }
            & path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
      &:active {
        background-color: ${({ theme }) => theme.Colors.purples[1]};
      }
    `}
`;

export const StyledInConversationChatItem = styled.button`
  display: flex;
  justify-content: center;
  min-width: 281px;
  :hover {
    cursor: pointer;
  }
`;

export const StyledTimeAndState = styled.div`
  height: 60px;
  width: 77px;
  position: relative;
  & > :first-child {
    display: flex;
    position: absolute;
    width: 120px;
    height: 12px;
    right: 0;
    top: -5px;
    justify-content: flex-end;
    & > div {
      height: 100%;
      margin-top: -2px;
      width: 14px;
    }
    & > span {
      align-self: flex-start;
      margin-top: -6px;
      color: ${({ theme }) => theme.Colors.grays[5]};
      font-size: ${({ theme }) => theme.fontSize[10]};
      font-weight: ${({ theme }) => theme.fontWeight[400]};
    }
  }
  & path {
    padding-top: 5px;
    fill: ${({ theme }) => theme.Colors.grays[6]};
  }
  & > :nth-child(2) {
    margin-top: 15px;
    width: 43px;
    height: 20px;
    display: flex;
    margin-left: 20px;
    min-width: 43px;
    display: flex;
    justify-content: space-between;
    & > :nth-child(1) {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      text-align: center;
      //background-color: ${({ theme }) => theme.Colors.grays[7]};
      & * {
        & > svg {
          padding-top: 3.5px;
          width: 60%;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
          }
        }
      }
    }
    & > :nth-child(2) {
      width: 19px;
      height: 19px;
      text-align: center;
      border-radius: 50%;
      font-size: ${({ theme }) => theme.fontSize[12]};
      background-color: ${({ theme }) => theme.Colors.green[4]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      //background-color: teal;
      align-items: center;
      display: flex;
      justify-content: center;
      & svg {
        & path {
          fill: ${({ theme }) => theme.Colors.grays[10]};
        }
      }
      /* & svg:last-child {
        position: absolute;
        height: 14px;
        width: 14px;
        right: 6px;
        & path {
          fill: ${({ theme }) => theme.Colors.purples[1]};
        }
      } */
    }
  }
`;

export const StyledNotViewedMessages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;
  border-radius: 50%;
  color: ${({ theme }) => theme.Colors.grays[10]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize[10]};
  position: absolute;
  left: 40px;
  bottom: 6px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[10]};
  background-color: ${({ theme }) => theme.Colors.purples[1]};
`;

export const StyledTransferIcon = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[7]};
`;
export const StyledProactiveIcon = styled.div`
  width: 19px;
  height: 19px;
  text-align: center;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize[12]};
  background-color: ${({ theme }) => theme.Colors.green[4]};
  color: ${({ theme }) => theme.Colors.grays[10]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  background: teal;
  align-items: center;
  display: flex;
  justify-content: center;
  & svg {
    & path {
      fill: ${({ theme }) => theme.Colors.grays[10]};
    }
  }
`;

// animation: ${({ hasPriority }) =>
// hasPriority === true ? 'infinite resplandorAnimation 3s' : 'none'};
// @keyframes resplandorAnimation {
// 0%,
// 100% {
//   box-shadow: 0px 0px 20px ${({ theme }) => theme.Colors.orange[2]};
// }
// 50% {
//   box-shadow: 0px 0px 0px ${({ theme }) => theme.Colors.orange[2]};
// }
// }
