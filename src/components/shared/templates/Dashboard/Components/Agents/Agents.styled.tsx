import styled from 'styled-components';
import { IContainerAgentProps } from './Agents.interface';

export const StyledWrapperAgent = styled.div`
  position: relative;
  width: 429px;
  height: 405px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding-bottom: 15px;
  & > span {
    display: flex;
    justify-content: space-between;
    padding: 0 2.5rem;
    margin-bottom: 10px;
  }
  & > :last-child {
    border-radius: 10px;
    margin: 0 auto;
    height: 290px;
    overflow: scroll;

    width: 95%;
    &::-webkit-scrollbar {
      display: none;
    }
    & > span {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      margin-bottom: 10px;
      & span:first-child {
        margin-left: 16px;
        color: ${({ theme }) => theme.Colors.grays[1]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
      }
      & span:last-child {
        color: ${({ theme }) => theme.Colors.grays[1]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
      }
    }
  }
`;

export const StyledHeaderAgent = styled.div<IContainerAgentProps>`
  width: 100%;
  height: 75px;
  display: flex;
  padding-left: 28px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin-bottom: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
  }
  & > :nth-child(2) {
    & > button {
      margin-right: 23px;
      cursor: pointer;
      & > div {
        height: 33px;
        border-radius: 16px;
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        & span {
          color: ${({ theme }) => theme.Colors.grays[3]};
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
        }
        & > :first-child {
          & > div {
            padding-top: 2px;
            padding-left: 4px;
            & > div {
              & > svg {
                width: 15px;
                height: 17px;
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[6]};
                }
              }
            }
          }
        }
        & > :last-child {
          width: 20px;
          & > div {
            width: 10px;
            margin-left: 6px;
            margin-top: 1px;
            & > div {
              & > svg {
                width: 8px;
                height: 4px;
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[3]};
                }
              }
            }
          }
        }
      }
    }
  }
  & > div {
    z-index: 1;
  }
`;

export const StyledAgent = styled.div<IContainerAgentProps>`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding-right: 0.6rem;
  align-items: center;
  background-color: ${({ theme, index }) =>
    index && index % 2 !== 0 ? theme.Colors.grays[10] : theme.Colors.grays[9]};

  & > div:first-child {
    width: 100%;
    height: 33px;
    display: flex;
    align-items: center;
    margin: 12px 25px;
    & > img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }
    & > div {
      & > div {
        & > div {
          & > svg {
            width: 33px;
            height: 33px;
            & > :last-child {
              & > rect {
                fill: ${({ theme, index }) =>
                  index && index % 2 !== 0
                    ? theme.Colors.grays[9]
                    : theme.Colors.grays[10]};
              }
            }
          }
        }
      }
    }

    & > button {
      width: 20px;
      height: 20px;
      margin-left: 4px;
      margin-right: 2px;
      & > :disabled {
        cursor: not-allowed;
      }
      & > :hover {
        cursor: pointer;
        & * {
          & > svg {
            & > :nth-child(1) {
              & > path {
                fill: ${({ theme }) => theme.Colors.purples[1]};
              }
            }
          }
        }
      }
      &:active {
        opacity: 0.9;
      }
      & > div {
        & * {
          & > svg {
            & > :nth-child(1) {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[6]};
              }
            }
          }
        }
      }
    }
  }
  span {
    margin-left: 14px;
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
  }
  & > :nth-child(2) {
    display: flex;
    justify-content: end;
    width: 100%;
    & > div {
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 25px;
      & span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        color: ${({ theme }) => theme.Colors.grays[10]};
        font-weight: ${({ theme }) => theme.fontWeight[700]};
        font-size: ${({ theme }) => theme.fontSize[12]};
      }
    }

    & > button {
      width: 14px;
      height: 14px;
      margin-left: 16px;
      position: relative;
      top: 3px;
      & > div {
        & * {
          & > svg {
            width: 14px;
          height: 14px;
            & > :nth-child(1) {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[6]};
              }
            }
          }
        }
      }
      & > :hover {
        cursor: pointer;
        & * {
          & > svg {
            & > :nth-child(1) {
              & > path {
                fill: ${({ theme }) => theme.Colors.purples[1]};
              }
            }
          }
        }
      }
      &:active {
        opacity: 0.9;
      }
      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        & * {
          & > svg {
            cursor: not-allowed;
        }
      }
    }
  }
`;
