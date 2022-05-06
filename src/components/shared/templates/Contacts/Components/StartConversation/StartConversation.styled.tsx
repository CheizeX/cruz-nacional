import styled, { css } from 'styled-components';
import { IContainerStartConversation } from './StartConversation.interface';

export const StyledStartConversationContainer = styled.div`
  width: 520px;
  min-height: 340px;
  height: fit-content;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
`;
export const StyledStartConversationHeader = styled.div`
  align-items: center;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  & > :first-child {
    display: flex;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 20px;
      display: flex;
      align-items: end;
      height: 26px;
    }
    & > div {
      width: 14px;
      & * {
        & > svg {
          width: 26px;
          height: 26px;
        }
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    padding-left: 20px;
    display: flex;
    align-items: end;
    height: 26px;
  }

  & button {
    height: 13px;
    width: 13px;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
export const StyledBodyStartConverstion = styled.div`
  padding-bottom: 20px;
  & > :nth-child(1) {
    flex-direction: column;
    height: 26px;
    display: flex;
    justify-content: flex-end;
    padding-left: 20px;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      display: flex;
      justify-content: start;
      padding-left: 10px;
    }
  }
  & > :nth-child(2) {
    width: 100%;
    display: flex;
    // justify-content: space-between;
    margin: 10px 0 0 0;
    max-width: 462px;
    margin-bottom: 10px;
    & > :nth-child(1) {
      display: flex;
      height: 32px;
      justify-content: start;
      width: 100%;
      max-width: 384px;
      & > div {
        margin-left: 30px;
        margin-right: 10px;
        width: 30px;
        & > div {
          & * {
            & > svg {
              width: 26px;
              height: 26px;
            }
          }
        }
      }
    }
    & > :nth-child(2) {
      display: flex;
      & > div {
        top: 6px;
      }
    }
  }

  & > :nth-child(3) {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: flex-start;
    padding-left: 20px;
    & > div {
      max-height: 52px;
      // min-height: 34px;
      width: 100%;
      display: flex;
      & > button {
        display: flex;
        width: 114px;
        cursor: pointer;
        & :hover {
          & > div {
            & * {
              & > svg {
                width: 30px;
                height: 30px;
              }
            }
          }
          & > span {
            color: ${({ theme }) => theme.Colors.purples[3]};
            font-weight: ${({ theme }) => theme.fontWeight[600]};
          }
        }
        & > div {
          max-height: 30px;
          display: flex;
          & * {
            & > svg {
              // selectedByChannel
              width: 26px;
              height: 26px;
            }
          }
        }
        & > span {
          color: ${({ theme }) => theme.Colors.grays[3]};
          display: flex;
          height: 30px;
          align-items: center;
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 12px;
          font-weight: ${({ theme }) => theme.fontWeight[500]};
        }
      }
    }
    & > span {
      height: 22px;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 12px;
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      margin-bottom: 10px;
      padding-left: 10px;
    }
  }
  & > :nth-child(4) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 480px;
    margin: 0 auto;
    & > :first-child {
      margin-bottom: 20px;
      height: 122px;
      border: none;
      padding: 20px;
      font-size: ${({ theme }) => theme.fontSize[14]};
      background-color: ${({ theme }) => theme.Colors.grays[9]};
    }
  }
  & > :nth-child(5) {
    display: flex;
    //justify-content: space-between;
    & > :first-child {
      width: 34px;
      height: 34px;
      & > div {
        & * {
          & > svg {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
`;

export const StyledSelectedChannel = styled.div<IContainerStartConversation>`
  display: flex;
  width: 114px;
  cursor: pointer;
  & :hover {
    & > div {
      & * {
        & > svg {
          width: 30px;
          height: 30px;
        }
      }
    }
    & > span {
      color: ${({ theme }) => theme.Colors.purples[3]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
    }
  }
  & > div {
    max-height: 30px;
    display: flex;
    & * {
      & > svg {
        width: 26px;
        height: 26px;
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    display: flex;
    height: 30px;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 12px;
    font-weight: ${({ theme }) => theme.fontWeight[500]};
  }

  ${({ selectedByChannel }) =>
    selectedByChannel &&
    css`
      & > div {
        & * {
          & > svg {
            width: 30px;
            height: 30px;
          }
        }
      }
      & > span {
        color: ${({ theme }) => theme.Colors.purples[3]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[14]};
      }
    `}
`;

export const StyledSelectedNumber = styled.button<IContainerStartConversation>`
  cursor: pointer;
  display: flex;
  justify-content: start;
  width: 100%;
  min-width: 164px;
  // padding: 0 12px;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 50%;
    border: 2px solid
      ${({ theme, selectStartConversation }) =>
        selectStartConversation
          ? theme.Colors.purples[1]
          : theme.Colors.grays[8]};
    width: 24px;
    height: 24px;
    & > div {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${({ theme, selectStartConversation }) =>
        !selectStartConversation
          ? theme.Colors.grays[8]
          : theme.Colors.purples[1]};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    text-align: center;
    padding-left: 6px;
    display: flex;
    align-items: center;
    width: fit-content;
    height: 24px;
  }
`;
