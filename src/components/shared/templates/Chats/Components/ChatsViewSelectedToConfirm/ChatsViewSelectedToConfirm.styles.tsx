import styled, { css } from 'styled-components';
import {
  Emojis,
  PredefinidedTextsInterface,
} from '../../ChatsSection/ChatsSection.interface';

export const StyledChatsViewSelectedToConfirm = styled.div`
  height: 620px;
  width: 952px;
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeaderChatsViewSelectedToConfirm = styled.div`
  height: 41px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  & img {
    width: 40px;
    height: 40px;
    padding: 0;
    object-fit: cover;
  }
  & > div {
    height: 100%;
    min-width: 220px;
    max-width: max-content;
    display: flex;
    align-items: center;
    & button {
      cursor: pointer;
      min-width: 40px;
      max-width: 40px;
      width: 100%;
      height: 36px;
      display: flex;
      justify-content: flex-end;
    }
    & > :first-child {
      border-radius: 50%;
      display: flex;
      align-items: center;
      height: 40px;
      margin-right: 10px;
      text-align: left;
      & svg {
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        display: flex;
        align-items: center;
        border-radius: 50%;
        width: 37px;
        height: 37px;
        overflow: hidden;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[8]};
        }
      }
    }
    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      min-width: 60px;
      max-height: 40px;
      text-align: left;
      & > :first-child {
        color: ${({ theme }) => theme.Colors.grays[5]};
        font-weight: ${({ theme }) => theme.fontWeight[400]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        margin-bottom: -3px;
      }
      & > :last-child {
        word-wrap: nowrap;
        display: flex;
        flex-direction: row;
        color: ${({ theme }) => theme.Colors.grays[1]};
        margin-top: -3px;
      }
    }
    & > :nth-child(3) {
      & div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    }
  }
  & > span {
    height: 100%;
    min-width: 243px;
    width: fit-content;
    display: flex;
    align-items: center;
    & > :nth-child(1) {
      & > :first-child {
        display: none;
      }
      & > button {
        & svg {
          fill: ${({ theme }) => theme.Colors.grays[6]};
        }
        :hover {
          & svg {
            fill: ${({ theme }) => theme.Colors.grays[3]};
          }
        }
      }
      & input {
        padding-left: 10px;
      }
    }
    & > button {
      margin-left: 8px;
      & span {
        font-size: ${({ theme }) => theme.fontSize[12]};
      }
    }
    & > :nth-child(2) {
      background-color: ${({ theme }) => theme.Colors.green[1]};
      width: 80px;
      :hover {
        background-color: ${({ theme }) => theme.Colors.green[2]};
      }
      :active {
        background-color: ${({ theme }) => theme.Colors.green[1]};
      }
    }
    & > :nth-child(3) {
      background-color: ${({ theme }) => theme.Colors.grays[5]};
      width: 103px;
      :hover {
        background-color: ${({ theme }) => theme.Colors.grays[3]};
      }
      :active {
        background-color: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
    & > :nth-child(4) {
      width: 98px;
      width: 98px;
      margin: 0 8px;
      background-color: ${({ theme }) => theme.Colors.orange[2]};
      :hover {
        background-color: ${({ theme }) => theme.Colors.orange[5]};
      }
      :active {
        background-color: ${({ theme }) => theme.Colors.orange[2]};
      }
    }
  }
`;

export const StyledChatsViewConversation = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  height: 504px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  border-radius: 10px;
  position: relative;
`;

export const StyledFooterButtonsSelectedToConfirm = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    & span {
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
  & > :first-child {
    background-color: ${({ theme }) => theme.Colors.grays[5]};
    width: 103px;
    :hover {
      background-color: ${({ theme }) => theme.Colors.grays[3]};
    }
    :active {
      background-color: ${({ theme }) => theme.Colors.grays[5]};
    }
  }
  & > :nth-child(2) {
    width: 98px;
    width: 98px;
    margin: 0 8px;
    background-color: ${({ theme }) => theme.Colors.orange[2]};
    :hover {
      background-color: ${({ theme }) => theme.Colors.orange[5]};
    }
    :active {
      background-color: ${({ theme }) => theme.Colors.orange[2]};
    }
  }
  & > :last-child {
    padding: 0;
    width: 168px;
  }
`;

export const StyledFooterToChat = styled.div<
  PredefinidedTextsInterface & Emojis
>`
  position: relative;
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > :first-child {
    width: 80px;
    height: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    & > button {
      width: 20px;
      height: 20px;
      :hover {
        cursor: pointer;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[5]};
        }
      }
      :active {
        & * {
          fill: ${({ theme }) => theme.Colors.grays[7]};
        }
      }
    }
    & > :nth-child(4) {
      margin-right: 17px;
      & * {
        ${({ emojisDisplayed }) =>
          emojisDisplayed &&
          css`
            fill: ${({ theme }) => theme.Colors.purples[1]};
          `}
      }
    }
    & > :nth-child(5) {
      & * {
        ${({ showPredefinedTexts }) =>
          showPredefinedTexts &&
          css`
            fill: ${({ theme }) => theme.Colors.purples[1]};
          `}
      }
    }
  }
  & > :nth-child(2) {
    margin-right: 8px;
    & button {
      display: none;
    }
    & input {
      width: 100%;
      padding-left: 10px;
      ::placeholder {
        color: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
  }
  & > :nth-child(3) {
    & > div {
      & > div {
        & > div {
          & > svg {
            height: 22px;
            width: 22px;
            padding-top: 4px;
          }
        }
      }
    }
  }
`;

export const StyledPredefinidedTexts = styled.div<PredefinidedTextsInterface>`
  // set visibility hidden when showPredefinedTexts === true

  visibility: ${({ showPredefinedTexts }) =>
    showPredefinedTexts ? 'visible' : 'hidden'};

  position: absolute;
  width: 350px;
  height: 250px;
  bottom: 60px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > button {
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    padding-left: 5px;
    & > span {
      margin-left: 5px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      cursor: pointer;
      & > span {
        color: ${({ theme }) => theme.Colors.purples[2]};
      }
      & svg {
        background-color: ${({ theme }) => theme.Colors.purples[2]};
      }
    }
    & > div {
      height: 30px;
      & div {
        display: flex;
        justify-content: center;
        align-items: center;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[9]};
        }
        & svg {
          background-color: ${({ theme }) => theme.Colors.grays[6]};
          height: 20px;
          width: 20px;
          padding: 2px;
          /* border: 1px solid green; */
          border-radius: 50%;
        }
      }
    }
  }
`;

export const StyledFooterPausedButton = styled.button`
  min-width: 230px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.Colors.green[1]};
  min-height: 35px;
  font-size: 12px;
  color: ${({ theme }) => theme.Colors.grays[9]};
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.Colors.green[2]};
  }
`;
