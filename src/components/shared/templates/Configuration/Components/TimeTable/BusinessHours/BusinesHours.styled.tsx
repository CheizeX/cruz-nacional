/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';
import { ConfigSectionInterface } from '../../../ConfigurationSection/ConfigurationSection.interface';

export const StyledBusinessHours = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 352px;
  max-height: 260px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 24px;
  & > button {
    width: 85%;
    height: 40px;
  }
`;
export const StyledBusinessHoursHeader = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 25px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > button {
    width: 15px;
    height: 15px;
    text-align: center;
    &: hover {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
  }
`;

export const StyledBusinessHoursBodyWithoutSet = styled.div`
  width: 200px;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  & > span {
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const StyledBusinessHoursBodySetted = styled.div`
  width: 100%;
  height: 100%;
  max-height: 175px;
  padding-left: 25px;
  padding-right: 15px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
export const StyledBusinessHoursBodySettedGroupedDays = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  & ::-webkit-scrollbar {
    border-radius: 4px;
    outline: 2px solid ${({ theme }) => theme.Colors.grays[9]};
    width: 10px;
  }
  & ::-webkit-scrollbar-track {
    border-radius: 10px;
    width: 8px;
  }
  & ::-webkit-scrollbar-button {
    border-radius: 10px;
    width: 7px;
    height: 2px;
  }
  & ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.Colors.purples[2]};
    border: 2px solid ${({ theme }) => theme.Colors.grays[10]};
    padding-top: 20px;
    &:hover {
      background-color: ${({ theme }) => theme.Colors.purples[1]};
    }
  }

  & span {
    font-size: 12px;
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > div {
    padding-left: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    & > :first-child {
      border-radius: 50%;
      width: 5px;
      height: 5px;
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      margin-right: 5px;
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-weight: 500;
      & > span {
        font-weight: 600;
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
    }
  }
`;

export const StyledSetBusinessTimeDateAndHours = styled.div`
  width: 450px;
  height: 535px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
`;
export const StyledSetBusinessTimeDateAndHoursHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > button {
    width: 15px;
    height: 15px;
    text-align: center;
    &: hover {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
  }
`;
export const StyledSetBusinessTimeDateAndHoursFooter = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  & > button {
    height: 40px;
  }
`;
export const StyledSetBusinessTimeDateAndHoursBody = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 25px;
  overflow: scroll;
  & ::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledSetBusinessTimeSetDayItem = styled.div`
  width: 100%;
  /* min-height: 150px; */
  height: fit-content;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 0;
  & > :first-child {
    width: 100%;
    display: flex;
    & > div {
      & :hover {
        cursor: pointer;
      }
    }

    & > span {
      font-weight: 600;
      font-size: 16px;
      padding-left: 10px;
      display: flex;
      align-items: flex-end;
      color: ${({ theme }) => theme.Colors.grays[2]};
    }
  }
`;
export const StyledSetBusinessTimeSetHourStartAndFinish = styled.div<ConfigSectionInterface>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 23px;
  position: relative;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 19px;
    & > span {
      font-size: 12px;
    }
    & > div {
      width: 40px;
      max-width: 40px;
      min-width: 152px;

      & > :first-child {
        display: none;
      }
      & > button {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 150px;
        cursor: pointer;
        & svg {
          transform: translateX(50px);
          height: 17px;
          width: 17px;
        }
        &: hover {
          & div {
            & * {
              fill: ${({ theme }) => theme.Colors.grays[5]};
            }
          }
        }
        & div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  & > div:nth-child(1) {
    & > div {
      & > button {
        &: hover {
          & > div {
            & * {
              fill: ${({ theme, startTimeController, selected, dayActive }) =>
                startTimeController && selected === dayActive
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[5]};
            }
          }
        }
        & div {
          & * {
            fill: ${({ theme, startTimeController, selected, dayActive }) =>
              startTimeController && selected === dayActive
                ? theme.Colors.purples[1]
                : theme.Colors.grays[7]};
          }
        }
      }
    }
  }
  & > div:nth-child(2) {
    & > div {
      & > button {
        &: hover {
          & div {
            & * {
              fill: ${({ theme, endTimeController, selected, dayActive }) =>
                endTimeController && selected === dayActive
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[5]};
            }
          }
        }
        & div {
          & * {
            fill: ${({ theme, endTimeController, selected, dayActive }) =>
              endTimeController && selected === dayActive
                ? theme.Colors.purples[1]
                : theme.Colors.grays[7]};
          }
        }
      }
    }
  }
`;
export const StyledSetSecondBusinessTimeSetHourStartAndFinish = styled.div<ConfigSectionInterface>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 23px;
  position: relative;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 19px;
    & > span {
      font-size: 12px;
    }
    & > div {
      position: relative;
      width: 40px;
      max-width: 40px;
      min-width: 152px;

      & > :first-child {
        display: none;
      }
      & > button {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 150px;
        cursor: pointer;
        & svg {
          transform: translateX(50px);
          height: 17px;
          width: 17px;
        }
        &: hover {
          & div {
            & * {
              fill: ${({ theme }) => theme.Colors.grays[5]};
            }
          }
        }
        & div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  & > :nth-child(3) {
    & * {
      margin-left: 3px;
      height: 20px;
      width: 20px;
    }
  }
  & > div:nth-child(1) {
    & > div {
      & > button {
        &: hover {
          & > div {
            & * {
              fill: ${({
                theme,
                startSecondTimeController,
                selected,
                dayActive,
              }) =>
                startSecondTimeController && selected === dayActive
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[5]};
            }
          }
        }
        & div {
          & * {
            fill: ${({
              theme,
              startSecondTimeController,
              selected,
              dayActive,
            }) =>
              startSecondTimeController && selected === dayActive
                ? theme.Colors.purples[1]
                : theme.Colors.grays[7]};
          }
        }
      }
    }
  }
  & > div:nth-child(2) {
    & > div {
      & > button {
        &: hover {
          & div {
            & * {
              fill: ${({
                theme,
                endSecondTimeController,
                selected,
                dayActive,
              }) =>
                endSecondTimeController && selected === dayActive
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[5]};
            }
          }
        }
        & div {
          & * {
            fill: ${({ theme, endSecondTimeController, selected, dayActive }) =>
              endSecondTimeController && selected === dayActive
                ? theme.Colors.purples[1]
                : theme.Colors.grays[7]};
          }
        }
      }
    }
  }
`;

export const StyledTimeControllerStart = styled.main`
  max-width: 150px;
  height: 132px;
  position: absolute;
  z-index: 1;
  top: 73px;
  left: 25px;
`;
export const StyledTimeControllerEnd = styled.main`
  max-width: 150px;
  height: 132px;
  position: absolute;
  z-index: 1;
  top: 73px;
  right: 55px;
`;
export const StyledSecondTimeControllerStart = styled.main`
  max-width: 150px;
  height: 132px;
  position: absolute;
  z-index: 1;
  top: 73px;
`;
export const StyledSecondTimeControllerEnd = styled.main`
  max-width: 150px;
  height: 132px;
  position: absolute;
  z-index: 1;
  top: 73px;
  right: 55px;
`;
