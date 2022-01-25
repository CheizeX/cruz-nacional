import styled, { css } from 'styled-components';
import { StyledClientAndAgentAvatars } from '../PendingsChatItem/PendingsChatItem.styles';
import { IContainerHistory, IHistoryChatStyled } from './ChatHistory.interface';

export const StyledChatHistory = styled.div`
  width: 632px;
  height: 512px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
`;
export const StyledChatHistoryHeader = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 18px 0 24px;
  justify-content: space-between;
  & > div:first-child {
    & > div {
      top: -1px;
      & * {
        & > svg {
          height: 23px;
          width: 23px;
        }
      }
    }
    & > span {
      position: relative;
      top: 1px;
      left: 32px;
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 17px;
    }
  }
  & > :nth-child(2) {
    width: 230px;
    display: flex;
    justify-content: space-between;
    & > :nth-child(2) {
      width: 20px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      & > button {
        width: 20px;
        height: 10px;
        & :disabled {
          opacity: 0;
        }
        & :hover {
          cursor: pointer;
          & * {
            fill: ${({ theme }) => theme.Colors.purples[3]};
          }
        }
        & > div {
          & * {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[6]};
              }
            }
          }
        }
      }
    }
    & > button {
      width: 34px;
      & > div {
        height: 20px;
        & * {
          & > svg {
            width: 14px;
            height: 20px;
            cursor: pointer;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[7]};
            }
          }
        }
      }
    }
  }
`;
export const StyledChatHistoryBody = styled.div`
  display: flex;
  color: ${({ theme }) => theme.Colors.grays[3]};
  & > :first-child {
    height: 452px;
    width: 289px;
    border-right: 1px solid ${({ theme }) => theme.Colors.grays[8]};
    padding: 18px 0 0 24px;
    & > span {
      display: flex;
      & > span {
        color: ${({ theme }) => theme.Colors.grays[3]};
        padding-left: 7px;
      }
      & > div {
        border-radius: 50px;
        background-color: ${({ theme }) => theme.Colors.purples[3]};
        color: ${({ theme }) => theme.Colors.grays[10]};
        width: 100%;
        height: 19px;
        padding-top: 3px;
        font-weight: ${({ theme }) => theme.fontWeight[700]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        margin-left: 7px;
        max-width: 19px;
      }
    }
  }
  & > :last-child {
    display: flex;
    flex-direction: column;
    padding: 16px 16px;
    text-align: initial;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[3]};
      padding-left: 7px;
    }
  }
`;
export const SectionAgentsContainer = styled.div`
  width: 249px;
  height: 392px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  margin-top: 7px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SectionContainerChats = styled.div`
  width: 304px;
  max-height: 392px;
  min-height: 390px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  margin-top: 7px;
  padding-top: 1px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCardAgents = styled.button<IHistoryChatStyled>`
  width: 229px;
  height: 120px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  cursor: pointer;
  margin-bottom: 10px;
  ${({ focusedChats }) =>
    focusedChats &&
    css<IHistoryChatStyled>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `};
  :hover {
    background-color: ${({ theme }) => theme.Colors.purples[1]};
    color: ${({ theme }) => theme.Colors.grays[10]};
    & > :nth-child(2) {
      & > div:last-child {
        background-color: ${({ theme }) => theme.Colors.grays[10]};
        & > div {
          & * {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.purples[1]};
              }
            }
          }
        }
        & > span {
          color: ${({ theme }) => theme.Colors.purples[1]};
        }
      }
    }
  }
  & > :nth-child(1) {
    display: flex;
    width: 55px;
    height: 18px;
    margin-bottom: 13px;
    padding-left: 17px;
    & > :first-child(1) {
      width: 15px;
      height: 17px;
    }
    & > :nth-child(3) {
      width: 100%;
      min-width: 120px;
      display: flex;
      justify-content: flex-end;
      & > div {
        height: 20px;
        padding: 2.5px 5px;
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
    }
    & > span {
      padding-left: 12px;
      display: flex;
      top: 2px;
      position: relative;
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
  & > :nth-child(2) {
    display: flex;
    width: 172px;
    height: 21px;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    & > div:first-child {
      background-color: ${({ theme }) => theme.Colors.orange[3]};
      min-width: 62px;
      min-height: 21px;
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
      & > span {
        color: ${({ theme }) => theme.Colors.grays[10]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        padding-top: 1px;
      }
    }
    & > :nth-child(2) {
      font-size: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #24c3a7;
      font-weight: 900;
      padding-top: 1px;
      line-height: 14px;
    }
    & > div:last-child {
      background-color: ${({ theme, focusedChats }) =>
        focusedChats === true ? theme.Colors.grays[10] : theme.Colors.grays[6]};
      min-width: 62px;
      min-height: 21px;
      & > div {
        & * {
          & > svg {
            width: 12px;
            height: 12px;
            & > path {
              fill: ${({ theme, focusedChats }) =>
                focusedChats === true
                  ? theme.Colors.purples[1]
                  : theme.Colors.grays[10]};
            }
          }
        }
      }
      & > span {
        color: ${({ theme, focusedChats }) =>
          focusedChats && focusedChats === true
            ? theme.Colors.purples[1]
            : theme.Colors.grays[10]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        padding-top: 1px;
      }
    }
  }
  & > :nth-child(3) {
    display: flex;
    width: 123px;
    height: 23px;
    margin-left: 16px;
    & > :first-child {
      width: 24px;
      height: 24px;
      & * {
        & > svg {
          width: 23px;
          height: 23px;
        }
      }
    }
    & > span {
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      left: 8px;
      top: 2px;
      min-width: 150px;
      max-width: 160px;
      display: flex;
      justify-content: flex-start;
    }
  }
`;
export const StyledUserChats = styled.div<IContainerHistory>`
  max-width: 241px;
  width: fit-content;
  display: flex;
  left: 16px;
  position: relative;
  margin-top: 15px;
  & > :first-child {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    * {
      font-size: 12px;
    }
    & img {
      max-width: 120px;
      max-height: 130px;
      object-fit: cover;
      box-shadow: 0 0px 10px #b2b2b2;
      border-radius: 10px;
      min-height: 84px;
    }
    & article {
      transition: all 1s ease-in-out;
      z-index: 1;
      background-color: ${({ theme }) => theme.Colors.grays[1]};
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: bottom;
      border-radius: 10px;
      box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.199);
      overflow: scroll;
      opacity: 1;
      padding-top: 50px;
      transition: all 1s ease-in-out;
      &::-webkit-scrollbar {
        display: none;
      }
      & > img {
        position: absolute;
        top: 20px;
        width: 90%;
        height: max-content;
        object-fit: contain;
      }
    }
    & iframe {
      max-width: 172px;
      max-height: 150px;
      min-height: 84px;
    }

    & > :first-child {
      border-radius: 0px 10px 10px 10px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[1]};
      padding: 13px 15px;
      font-weight: 400;
      max-width: 270px;
      word-wrap: break-word;
      display: flex;
      height: fit-content;
      flex-direction: row-reverse;
      // height: fit-content;
      ${({ isFocusWord }) =>
        isFocusWord &&
        css<IContainerHistory>`
          background-color: ${({ theme }) => theme.Colors.green[1]};
          color: ${({ theme }) => theme.Colors.grays[10]};
        `}
      & > div {
        margin-left: 12px;
        border-left: 2px dashed #dcdcdc;
        padding-left: 8px;
        min-height: 80px;
        & > button {
          width: 22px;
          display: flex;
          // z-index: 2;
          &:hover {
            cursor: pointer;
            & div {
              & * {
                & > svg {
                  stroke: ${({ theme }) => theme.Colors.purples[2]};
                }
              }
            }
          }
          & > div {
            width: 28px;
            & * {
              & > svg {
                width: 22px;
                height: 22px;
                stroke: ${({ theme }) => theme.Colors.grays[8]};
                & > g {
                  & * {
                    & > path {
                    }
                    fill: ${({ theme }) => theme.Colors.grays[10]};
                  }
                }
              }
            }
          }
        }
      }
    }
    & > :last-child {
      color: ${({ theme }) => theme.Colors.grays[5]};
      margin-top: 8px;
      padding-left: 10px;
      font-weight: 400;
      line-height: 14px;
    }
    & > div {
      display: flex;
      justify-content: flex-start;
    }
  }
`;
export const StyledAgentOrSUpervisorDialogue = styled.div<IContainerHistory>`
  max-width: 241px;
  width: fit-content;
  display: flex;
  position: relative;
  padding-left: 18px;
  text-align: end;
  height: fit-content;
  margin: 15px 0 0 0;
  & > div {
    display: flex;
    min-width: 268px;
    width: 100%;
    justify-content: flex-end;

    & > :first-child {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: end;
      * {
        font-size: 12px;
      }
      & img {
        max-width: 120px;
        max-height: 130px;
        border-radius: 10px;
        min-height: 84px;
        object-fit: cover;
        box-shadow: 0 0px 10px #ffffff;
      }
      & article {
        transition: all 1s ease-in-out;
        z-index: 1;
        background-color: ${({ theme }) => theme.Colors.grays[1]};
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: bottom;
        border-radius: 10px;
        box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.199);
        overflow: scroll;
        opacity: 1;
        padding-top: 50px;
        transition: all 1s ease-in-out;
        &::-webkit-scrollbar {
          display: none;
        }
        & > img {
          position: absolute;
          top: 20px;
          width: 90%;
          height: max-content;
          object-fit: contain;
        }
      }
      & iframe {
        max-width: 172px;
        max-height: 150px;
        min-height: 84px;
      }
      & > :first-child {
        max-width: 270px;
        border-radius: 10px 0px 10px 10px;
        background-color: ${({ theme }) => theme.Colors.purples[1]};
        justify-content: start;
        display: flex;
        color: ${({ theme }) => theme.Colors.grays[10]};
        padding: 13px 15px;
        font-weight: 400;
        height: fit-content;
        line-height: 14px;
        word-wrap: break-word;
        ${({ isFocusWord }) =>
          isFocusWord &&
          css<IContainerHistory>`
            background-color: ${({ theme }) => theme.Colors.green[1]};
            color: ${({ theme }) => theme.Colors.grays[10]};
          `}
        & > :nth-child(3) {
          z-index: 2;
          border: 0px;
        }
        & > div {
          height: 100%;
          margin-right: 12px;
          padding-right: 8px;
          border-right: 2px dashed #dcdcdc;

          & > button {
            width: 22px;
            display: flex;
            &:hover {
              cursor: pointer;
              & div {
                & * {
                  & > svg {
                    stroke: ${({ theme }) => theme.Colors.grays[6]};
                  }
                }
              }
            }
            & > div {
              width: 28px;
              & * {
                & > svg {
                  width: 22px;
                  height: 22px;
                  & > g {
                    & * {
                      & > path {
                      }
                      fill: ${({ theme }) => theme.Colors.grays[10]};
                    }
                  }
                }
              }
            }
          }
        }
      }
      & > :last-child {
        color: ${({ theme }) => theme.Colors.grays[5]};
        margin-top: 8px;
        padding-right: 10px;
        font-weight: 400;
      }
      & > div {
        display: flex;
        justify-content: flex-end;
      }
      & :nth-child(3) {
        z-index: 2;
      }
    }
  }
`;
export const StyledAvatarChats = styled(StyledClientAndAgentAvatars)`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  & > :first-child {
    & svg {
      background-color: ${({ theme }) => theme.Colors.grays[8]};
      width: 30px;
      height: 30px;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[7]};
      }
    }
  }
`;
export const StyledSearchHistory = styled.input`
  max-width: 100px;
  border-radius: 20px;
  max-height: 1.6rem;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  background: ${({ theme }) => theme && theme.Colors.grays[9]};
  outline: none;
  border: ${({ theme }) => theme && theme.Colors.grays[5]};
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
`;
export const WrapperSearchHistory = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.Colors.purples[1]};
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  background: ${({ theme }) => theme && theme.Colors.grays[9]};
  border-radius: 24px;
  min-height: 2rem;
  width: 140px;
  min-width: 140px;
  & > button {
    width: fit-content;
    height: fit-content;
    & > div {
      top: -9px;
      cursor: pointer;
      & * {
        & > svg {
          width: 18px;
          height: 18px;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[7]};
          }
        }
      }
    }
  }
`;
