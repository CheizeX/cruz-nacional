import styled from 'styled-components';
import { IPropsLeftPanel } from './LeftPanel.interface';

export const StyledLeftPanel = styled.div`
  width: 305px;
  height: 655px;
  border-right: 1px solid ${({ theme }) => theme.Colors.grays[9]};
`;
export const StyledHeaderPanel = styled.div`
  width: 305px;
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  padding-left: 24px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
  }
`;

export const StyledFocused = styled.div<IPropsLeftPanel>`
  & > button {
    border-bottom: 1px solid
      ${({ theme, focused }) =>
        focused === true ? theme.Colors.grays[10] : theme.Colors.grays[9]};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.Colors.purples[2]};
    }
    &:active {
      color: ${({ theme }) => theme.Colors.purples[1]};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    & > div {
      & > span {
        color: ${({ focused, theme }) =>
          focused === true ? theme.Colors.purples[1] : theme.Colors.grays[3]};
        &:hover {
          color: ${({ theme }) => theme.Colors.purples[2]};
        }
      }
    }
    & > div {
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ focused, theme }) =>
                focused === true
                  ? theme.Colors.purples[1]
                  : theme.Colors.grays[6]};
            }
          }
        }
      }
    }
  }
  & > div {
    border-bottom: 1px solid
      ${({ theme, focused }) =>
        focused === true ? theme.Colors.grays[9] : theme.Colors.grays[10]};
    & > div {
      margin-bottom: 24px;
    }
  }
`;
export const StyledLeftBody = styled.div<IPropsLeftPanel>`
  height: 519px;
  width: 100%;
  margin-top: 4px;
  & > :first-child {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  }
  & > div {
    & > button {
      width: 100%;
      height: 54px;
      padding-left: 21px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & span {
        margin-right: 8px;
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
      }
      & > :nth-child(1) {
        display: flex;
        justify-content: space-between;
        & span {
          font-weight: ${({ theme }) => theme.fontWeight[500]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
        }
      }
      & > div {
        & > div {
          display: flex;
          align-items: center;
          & > div {
            & > svg {
              width: 12px;
              height: 8px;
              & > path {
                :hover {
                  fill: ${({ theme }) => theme.Colors.purples[1]};
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const StyledCount = styled.div`
  background-color: ${({ theme }) => theme.Colors.purples[1]};
  width: 17px;
  height: 17px;
  border-radius: 50%;
  color: ${({ theme }) => theme.Colors.grays[10]};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  font-size: ${({ theme }) => theme.fontSize[12]};
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledLeftFooter = styled.div`
  width: 305px;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > button {
    width: 120px;
  }
`;
export const StyledChatBot = styled.span<IPropsLeftPanel>`
  width: 220px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 20px;
  & > :nth-child(1) {
    width: fit-content;
    height: 28px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    width: 100%;
    color: ${({ theme, types }) =>
      types === 'TODOS' ? theme.Colors.grays[10] : theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    align-items: center;
    text-align: center;
    :hover {
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      cursor: pointer;
    }
    :active {
      background-color: ${({ theme }) => theme.Colors.grays[5]};
    }
    background-color: ${({ theme, types }) =>
      types === 'TODOS' ? theme.Colors.purples[1] : ''};
  }
  & > :nth-child(2) {
    width: fit-content;
    height: 28px;
    width: 100%;
    color: ${({ theme, types }) =>
      types === 'AGENTS' ? theme.Colors.grays[10] : theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    align-items: center;
    text-align: center;
    :hover {
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      cursor: pointer;
    }
    :active {
      background-color: ${({ theme }) => theme.Colors.grays[5]};
    }
    background-color: ${({ theme, types }) =>
      types === 'AGENTS' ? theme.Colors.purples[1] : ''};
  }
  & > :nth-child(3) {
    height: 28px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    color: ${({ theme, types }) =>
      types === 'CHATBOT' ? theme.Colors.grays[10] : theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    align-items: center;
    text-align: center;
    :hover {
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      cursor: pointer;
    }
    :active {
      background-color: ${({ theme }) => theme.Colors.grays[5]};
    }
    background-color: ${({ theme, types }) =>
      types === 'CHATBOT' ? theme.Colors.purples[1] : ''};
  }
`;
