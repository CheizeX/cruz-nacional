import styled, { css } from 'styled-components';
import {
  StyledPendingWrapperProps,
  StyledLabelProps,
} from '../../ChatsSection/ChatsSection.interface';

export const StyledPendingChatsContainer = styled.div`
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

export const StyledPendingWrapper = styled.div<StyledPendingWrapperProps>`
  background-color: ${({ theme, focusedItem }) =>
    focusedItem ? theme.Colors.purples[1] : theme.Colors.grays[10]};
  border-radius: 10px;
  min-height: 77px;
  width: 281px;
  margin: 6px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 12px 0 0 0;
  min-width: 281px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: ${({ theme }) => theme.Colors.purples[1]};
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

export const StyledPendingChatItem = styled.button`
  display: flex;
  justify-content: center;
  min-width: 281px;
  :hover {
    cursor: pointer;
  }
`;

export const StyledClientAndAgentAvatars = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  & > img {
    border-radius: 50%;
    object-fit: cover;
  }
  & > :first-child {
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    & svg {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      display: flex;
      align-items: center;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      overflow: hidden;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[8]};
      }
    }
  }
  & > :nth-child(2) {
    position: absolute;
    width: 25px;
    height: 25px;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    & svg {
      border-radius: 50%;
      width: 23px;
      height: 23px;
    }
  }
`;

export const StyledNameAndDialog = styled.div`
  height: 60px;
  width: 108px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  & > :first-child {
    max-height: 18px;
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    color: ${({ theme }) => theme.Colors.grays[1]};
    overflow: hidden;
  }
  & > :nth-child(2) {
    max-height: 17px;
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    color: ${({ theme }) => theme.Colors.grays[3]};
    overflow: hidden;
  }
`;

export const StyledTimeAndState = styled.div`
  height: 60px;
  width: 77px;
  & > :first-child {
    display: flex;

    & > div {
      height: 100%;
      margin-top: -2px;
    }
    & > span {
      transform: translateX(14px);
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
    margin-left: 30px;
    & > :nth-child(1) {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      text-align: center;
      background-color: transparent;
      & svg {
        padding-top: 3.5px;
        width: 60%;
        & path {
          fill: ${({ theme }) => theme.Colors.grays[10]};
        }
      }
    }
    & > :nth-child(2) {
      margin-left: 5px;
      width: 20px;
      height: 20px;
      text-align: center;
      border-radius: 50%;
      font-size: ${({ theme }) => theme.fontSize[12]};
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.Colors.green[4]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
    }
  }
`;

export const StyledLabelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: fit-content;
  padding: 5px 0;
  margin-bottom: 5px;
  // border-top: 1px dotted ${({ theme }) => theme.Colors.grays[8]};
`;

export const StyledLabel = styled.span<StyledLabelProps>`
  height: 20px;
  width: max-content;
  border-radius: 3px;
  margin-top: 5px;
  background-color: red;
  background-color: ${({ color }) => color};
  & span {
    padding: 0px 7px;
    font-size: ${({ theme }) => theme.fontSize[10]};
    color: ${({ theme }) => theme.Colors.grays[10]};
  }
`;
