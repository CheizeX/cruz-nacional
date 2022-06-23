import styled from 'styled-components';
import { IContainerProps } from './MonitorFirstSection.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledMonitorFirstSection = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  width: 656px;
  height: 656px;
  margin-right: 24px;
`;

export const StyledHeaderFirstSection = styled.div`
  width: 656px;
  height: 55px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: space-between;
  & > span {
    display: flex;
    align-items: center;
    margin: 0 23px;
    & > button {
      cursor: pointer;
      &:hover {
        & > span {
          color: ${({ theme }) => theme.Colors.purples[1]};
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        }
      }
    }
    & > :nth-child(2) {
      min-width: 22px;
      min-height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: 700;
      font-size: 12px;
      width: fit-content;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      border-radius: 50%;
    }
  }
  & > div {
    display: flex;
    width: 340px;
    justify-content: space-between;
    align-items: center;
    & > :first-child {
      width: 15.3rem;
      height: 2.4rem;
      & > button:first-child {
        display: none;
      }
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

    & > :last-child {
      width: 68px;
      height: 100%;
      justify-content: space-between;
      display: flex;
      align-items: center;
      & > button {
        display: flex;
        max-width: 30px;
        height: 100%;
        cursor: pointer;
        &:hover {
          & > div {
            & * {
              & > svg {
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[4]};
                }
              }
            }
          }
        }
        & div {
          width: 15px;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
      & > div {
        width: 30px;
        height: 100%;
        & > button {
          width: 100%;
          height: 100%;
          cursor: pointer;
          &:hover {
            & > div {
              & * {
                & > svg {
                  & > path {
                    fill: ${({ theme }) => theme.Colors.grays[4]};
                  }
                }
              }
            }
          }
          & div {
            max-width: 30px;
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    /* & > button {
      margin-top: 20px;
      margin-right: 8px;
      & :hover {
        cursor: pointer;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[5]};
        }
      }
      & :active {
        cursor: pointer;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[6]};
        }
      }
    } */
    & > :nth-child(3) {
      z-index: 2;
    }
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    & > div {
      & > div {
        & * {
          & > svg {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
    & > :nth-child(1) {
      font-size: 30px;
      padding-top: 4px;
    }
    & > :nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
`;

export const StyledAgentSection = styled.button<IContainerProps>`
  width: 607px;
  height: 56px;
  border-radius: 10px;
  align-items: center;
  background-color: ${({ theme, index }) =>
    index && index % 2 !== 0 ? theme.Colors.grays[10] : theme.Colors.grays[9]};
  display: grid;
  grid-template-columns: 0.8fr 1.5fr 1.2fr 1.5fr 1.5fr 0.8fr;
  cursor: pointer;
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    min-height: 56px;
    max-height: 56px;
    justify-content: center;
    width: 100%;
    & > div {
      width: 30px;
      height: 30px;
      & * {
        & > svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  & > :nth-child(2) {
    display: flex;
    width: 100%;
    justify-content: center;
    & > div {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      font-size: ${({ theme }) => theme.fontSize[10]};
      line-height: 12px;
      background-color: ${({ position, theme, isColorPaused }) =>
        mySelector(
          position === 'ASSIGNMENT_PENDING',
          theme.Colors.orange[3],
          null,
        ) ||
        mySelector(
          position === 'ON_CONVERSATION' && isColorPaused === false,
          theme.Colors.blue[1],
          null,
        ) ||
        mySelector(
          position === 'ON_CONVERSATION' && isColorPaused === true,
          theme.Colors.green[1],
          null,
        ) ||
        mySelector(position === 'FINISHED', theme.Colors.grays[6], null)};
    }
  }
  & > :nth-child(3) {
    display: flex;
    justify-content: center;
    width: 100%;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
  & > :nth-child(4) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 6px;
    & > img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 8px;
    }
    & > div {
      width: 30px;
      height: 30px;
      & * {
        & > svg {
          width: 30px;
          height: 30px;
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
  & > :nth-child(5) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.Colors.grays[5]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    & > :first-child {
      width: 12px;
      height: 12px;
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
  & > :nth-child(6) {
    display: flex;
    justify-content: center;
    & > div {
      // cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }
  & span {
    color: ${({ theme, position }) =>
      position === 'ASSIGNMENT_PENDING'
        ? theme.Colors.grays[6]
        : theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
  }
`;

export const WrapperAgents = styled.div`
  height: 456px;
  width: 607px;
  margin: auto;
  & > :nth-child(2) {
    overflow: scroll;
    max-height: 456px;
    & ::-webkit-scrollbar {
      display: none;
    }
  }

  & > :first-child {
    width: 100%;
    z-index: 1;
    background: ${({ theme }) => theme.Colors.grays[10]};
    display: grid;
    grid-template-columns: 0.8fr 1.5fr 1.2fr 1.5fr 1.5fr 0.8fr;
    grid-auto-rows: 20px;
    & span {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
`;
