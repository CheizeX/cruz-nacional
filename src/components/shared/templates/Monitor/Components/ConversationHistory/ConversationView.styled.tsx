import styled, { css } from 'styled-components';
import { StyledClientAndAgentAvatars } from '../../../Chats/Components/PendingsChatItem/PendingsChatItem.styles';
import { IContainerWord } from './ConversationView.interface';

export const StyledConversationHistory = styled.div`
  width: 642px;
  height: 512px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
`;

export const StyledHeaderConversationHistory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 20px;
  max-width: 642px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 14px;
  }
  & > div {
    display: flex;
    width: 258px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    & > :first-child {
      display: flex;
      & > :first-child {
        height: 2.2rem;
        max-width: 14rem;
        & > button:last-child {
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
      & > :nth-child(2) {
        width: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        width: 100%;
        min-width: 40px;

        & > button {
          width: 30px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
    & > button {
      width: 20px;
      height: 20px;
      cursor: pointer;
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

export const StyledBodyConversationHistory = styled.div`
  display: flex;
  height: 100%;
  max-width: 632px;
  max-height: 432px;
  width: 100%;
  & img {
    max-width: 120px;
    max-height: 130px;
    object-fit: cover;
    box-shadow: 0 0px 10px #b2b2b2;
    border-radius: 10px;
    min-height: 84px;
  }
  & iframe {
    max-width: 172px;
    max-height: 150px;
    min-height: 84px;
  }
  & > :first-child {
    height: 100%;
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    border-right: 1px solid ${({ theme }) => theme.Colors.grays[8]};

    & > span {
      display: flex;
      margin-left: 20px;
      & > span {
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-size: ${({ theme }) => theme.fontSize[14]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        min-width: 50px;
        text-align: start;
      }
    }
  }
  & > :last-child {
    width: 50%;
    padding: 10px;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[3]};
      display: flex;
      justify-content: start;
      margin-left: 20px;
    }
  }
`;

export const SectionContainerConversationView = styled.div`
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

export const SectionContainerLeft = styled.div`
  width: 100%;
  height: 100%;
  max-height: 392px;
  min-height: 390px;
  border-radius: 10px;
  margin-top: 6px;
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledUserConversationView = styled.div<IContainerWord>`
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
    & > :first-child {
      border-radius: 0px 10px 10px 10px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[1]};
      padding: 13px 15px;
      font-weight: 400;
      max-width: 270px;
      word-wrap: break-word;
      height: fit-content;
      flex-direction: row-reverse;
      text-align: initial;
      ${({ isFocusWord }) =>
        isFocusWord &&
        css<IContainerWord>`
          background-color: ${({ theme }) => theme.Colors.green[1]};
          color: ${({ theme }) => theme.Colors.grays[10]};
        `}
      & > div {
        margin-left: 12px;
        border-left: 2px dashed #dcdcdc;
        padding-left: 8px;
        min-height: 80px;
        & > button {
          width: 18px;
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
            width: 18px;
            & * {
              & > svg {
                width: 18px;
                height: 18px;
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
      width: 100%;
      justify-content: start;
      display: flex;
    }
  }
`;

export const StyledAgentConversationView = styled.div<IContainerWord>`
  max-width: 262px;
  width: 100%;
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
      & > :first-child {
        max-width: 232px;
        border-radius: 10px 0px 10px 10px;
        background-color: ${({ theme }) => theme.Colors.purples[1]};
        justify-content: start;
        display: block;
        overflow: auto;
        //display: flex;
        color: ${({ theme }) => theme.Colors.grays[10]};
        padding: 13px 15px;
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        height: fit-content;
        line-height: 14px;
        word-wrap: break-word;
        ${({ isFocusWord }) =>
          isFocusWord &&
          css<IContainerWord>`
            background-color: ${({ theme }) => theme.Colors.green[1]};
            color: ${({ theme }) => theme.Colors.grays[10]};
          `}
        & > :first-child {
          height: 100%;
          margin-right: 12px;
          padding-right: 8px;
          border-right: 2px dashed #dcdc;
          & > button {
            width: 18px;
            display: flex;
            & > div {
              width: 18px;
              & * {
                & > svg {
                  width: 18px;
                  height: 18px;
                }
              }
            }
            &:hover {
              cursor: pointer;
              & div {
                & * {
                  & > svg {
                    stroke: ${({ theme }) => theme.Colors.grays[7]};
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
    }
  }
`;

export const StyledAvatarConversationView = styled(StyledClientAndAgentAvatars)`
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

export const StyledCardAgentConversation = styled.div`
  min-width: 250px;
  height: 346px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.purples[2]};
  & > :first-child {
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 6px 0;
    & > :first-child {
      width: 100%;
      height: 60px;
      fill: ${({ theme }) => theme.Colors.grays[9]};
    }
    & > span {
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    }
  }
  & > :nth-child(2) {
    display: flex;
    justify-content: center;
    width: 100%;
    max-height: 40px;
    & > div {
      width: 30px;
      height: 24px;
      & * {
        display: flex;
        justify-content: start;
        & > svg {
          width: 20px;
          height: 20px;
          & > path {
            fill: #2aa6ee;
          }
        }
      }
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 14px;
      display: flex;
      align-items: center;
    }
  }
  & > :nth-child(3) {
    display: flex;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    & > :first-child {
      background-color: ${({ theme }) => theme.Colors.orange[3]};
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 14px;
        top: -1px;
        & * {
          & > svg {
            height: 14px;
            width: 14px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
      & > span {
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        font-weight: ${({ theme }) => theme.fontWeight[600]};
      }
    }
    & > :nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 900;
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      color: #24c3a7;
    }
    & > :nth-child(3) {
      background-color: ${({ theme }) => theme.Colors.grays[6]};
      & > div {
        display: flex;
        align-items: center;
        justify-content: start;
        height: 14px;
        top: -1px;
        & * {
          & > svg {
            height: 12px;
            width: 12px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
      & > span {
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        font-weight: ${({ theme }) => theme.fontWeight[600]};
      }
    }
  }
  & > :nth-child(3) {
    display: flex;
    justify-content: center;
    & > div {
      & * {
        & > svg {
          width: 24px;
          height: 24px;
        }
      }
    }
    & > span {
      display: flex;
      align-items: end;
      margin-left: 24px;
      line-height: 14px;
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
  & > :nth-child(4) {
    display: flex;
    min-height: 40px;
    display: flex;
    align-items: end;
    justify-content: center;
    & > div {
      margin: 0 6px;
    }
  }
`;
