import styled from 'styled-components';
import { ConfigSectionInterface } from '../../../ConfigurationSection/ConfigurationSection.interface';

export const StyledLeftSideTimeRestrictions = styled.div`
  padding-top: 20px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  width: 656px;
  height: 656px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const StyledLeftSideTimeRestrictionsHeader = styled.div`
  padding: 0 25px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 456px;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.Colors.grays[9]};

    & > span {
      display: flex;
      align-items: center;
      height: 100%;
      width: 250px;
      & > span {
        margin-right: 10px;
      }
    }
    & > div {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        &: hover {
          cursor: pointer;
          & * {
            fill: ${({ theme }) => theme.Colors.grays[5]};
          }
        }
        & > div {
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          & > div {
            display: flex;
            align-items: center;
            justify-content: center;
            & > div {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 15px;
              height: 30px;
              & > svg {
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[6]};
                }
              }
            }
          }
        }
        & > :first-child {
          width: 20px;
          & > div {
            display: flex;
            justify-content: center;
            & > div {
              display: flex;
              justify-content: flex-end;
              & > svg {
                & > path {
                }
              }
            }
          }
        }
        & > :last-child {
          width: 15px;
          & > div {
            & > div {
              & > svg {
                height: 20px;
                width: 10px;
                margin: 0 2px;
                & > path {
                }
              }
            }
          }
        }
      }
      & > :nth-child(2) {
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        &: hover {
          cursor: pointer;
          & * {
            fill: ${({ theme }) => theme.Colors.grays[5]};
          }
        }
        & > div {
          display: flex;
          justify-content: center;
          align-items: center;
          & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            & > svg {
              & > path {
              }
            }
          }
        }
      }
    }
  }
  & > :nth-child(2) {
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
    & > button {
      padding: 0px;
      width: 152px;
      & :hover {
        background-color: ${({ theme }) => theme.Colors.grays[4]};
      }
      & > span {
        font-size: 12px;
      }
    }
  }
`;
export const StyledLeftSideTimeRestrictionsHeaderChip = styled.span`
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.Colors.grays[6]};
  border-radius: 50%;
  color: ${({ theme }) => theme.Colors.grays[10]};
`;
export const StyledLeftSideTimeRestrictionsHeaderChipMapped = styled.span`
  padding: 0 7px;
  min-width: 20px;
  width: fit-content;
  height: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.Colors.purples[2]};
  border-radius: 27px;
  color: ${({ theme }) => theme.Colors.grays[10]};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > span {
    padding: 0;
    margin: 0 auto;
  }
`;

export const StyledLeftSideTimeRestrictionsBodyWithoutRestrictions = styled.div`
  width: 607px;
  height: 100%;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px;
  margin-top: 10px;
  border-radius: 10px;
  & * {
    fill: ${({ theme }) => theme.Colors.grays[6]};
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
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
  }
  & span {
    width: 235px;
    height: 35px;
    font-size: 16px;
    text-align: center;
  }
`;

export const StyledLeftSideTimeRestrictionsBodyRestrictions = styled.div`
  max-width: 607px;
  max-height: 545px;
  height: 100%;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin: 24px;
  margin-top: 5px;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 5px;
  overflow: hidden;
  color: ${({ theme }) => theme.Colors.grays[4]};
  & ::-webkit-scrollbar {
    display: none;
  }
  & > :first-child {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1.5fr;
    grid-auto-rows: 20px;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.Colors.grays[1]};
    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 10px;
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
  }
  & > section {
    border-radius: 10px;
    height: 95%;
    overflow: scroll;
    & ::-webkit-scrollbar {
      display: none;
    }
    & > :nth-child(2n) {
      border-radius: 10px;
      background: ${({ theme }) => theme.Colors.grays[10]};
    }
    & > div {
      background: ${({ theme }) => theme.Colors.grays[9]};
      border-radius: 10px;
      height: 56px;
      display: grid;
      grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1.5fr;
      font-size: 12px;
      font-weight: 600;
      & > div,
      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div:nth-child(1) {
        border-radius: 27px;
        background: ${({ theme }) => theme.Colors.green[1]};
        height: 24px;
        width: 70px;
        align-self: center;
        justify-self: center;
        font-size: 10px;
        font-weight: bold;
        color: ${({ theme }) => theme.Colors.grays[10]};
      }
      & > span:nth-child(1) {
        border-radius: 27px;
        background: ${({ theme }) => theme.Colors.grays[6]};
        height: 24px;
        width: 80px;
        align-self: center;
        justify-self: center;
        font-size: 10px;
        font-weight: bold;
        color: ${({ theme }) => theme.Colors.grays[10]};
      }
      & > div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        & button {
          height: 100%;
          width: 35px;
          display: flex;
          align-items: center;
          & :hover {
            cursor: pointer;
            * {
              fill: ${({ theme }) => theme.Colors.grays[5]};
            }
          }
          & :active {
            cursor: pointer;
            * {
              fill: ${({ theme }) => theme.Colors.grays[7]};
            }
          }
          & div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        & svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;

export const StyledCreateNewRestriction = styled.div`
  width: 320px;
  height: 535px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
`;
export const StyledCreateNewRestrictionHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > button {
    display: flex;
    align-items: center;
    justify-content: center !important;
    width: 20px;
    height: 10px;
    &: hover {
      cursor: pointer;
      * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
  }
`;
export const StyledCreateNewRestrictionFooter = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  border-top: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  & > button {
    height: 40px;
    width: 120px;
  }
`;
export const StyledCreateNewRestrictionBody = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
  padding-top: 15px;
`;
export const StyledCreateNewRestrictionBodyAttention = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 5px;
  & > div {
    display: flex;
    align-items: center;
    & > div {
      display: flex;
      align-items: center;
      width: 20px;
      height: 20px;
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          & > svg {
            height: 14px;
            width: 14px;
          }
          & * {
            fill: ${({ theme }) => theme.Colors.purples[1]};
          }
        }
      }
    }
    & > span {
      color: ${({ theme }) => theme.Colors.purples[1]};
      padding-left: 8px;
      font-size: 12px;
    }
  }
  & > span {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 16px;
    padding-top: 3px;
    padding-left: 5px;
  }
`;
export const StyledCreateNewRestrictionBodyInputs = styled.div<ConfigSectionInterface>`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  position: relative;
  & > div {
    margin-bottom: 20px;
    width: 100%;
    text-align: left;
    & > div {
      & > input {
        padding-left: 10px;
      }
      & > :first-child {
        display: none;
      }
      & > button {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 100%;
        cursor: pointer;
        & svg {
          transform: translateX(100px);
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
    & span {
      padding-left: 20px;
      width: 100%;
      font-size: 12px;
      & span {
        padding-left: 0px;
      }
    }
  }
  & > div:nth-child(1) {
    & > div {
      & > button {
        &: hover {
          & div {
            & * {
              fill: ${({ theme, datePickerDate }) =>
                datePickerDate
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[5]};
            }
          }
        }
        & div {
          & * {
            fill: ${({ theme, datePickerDate }) =>
              datePickerDate ? theme.Colors.purples[1] : theme.Colors.grays[7]};
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
              fill: ${({ theme, startTimeController }) =>
                startTimeController
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[5]};
            }
          }
        }
        & div {
          & * {
            fill: ${({ theme, startTimeController }) =>
              startTimeController
                ? theme.Colors.purples[1]
                : theme.Colors.grays[7]};
          }
        }
      }
    }
  }
  & > div:nth-child(3) {
    & > div {
      & > button {
        &: hover {
          & div {
            & * {
              fill: ${({ theme, endTimeController }) =>
                endTimeController
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[5]};
            }
          }
        }
        & div {
          & * {
            fill: ${({ theme, endTimeController }) =>
              endTimeController
                ? theme.Colors.purples[1]
                : theme.Colors.grays[7]};
          }
        }
      }
    }
  }
`;
export const StyledCreateNewRestrictionBodyButtonContainer = styled.div`
  width: 100%;
  height: 20px;
  margin-left: 10px;
  display: flex;

  & span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    margin-left: -14px;
  }
`;
export const StyledDatePickerDateContainer = styled.article`
  position: absolute;
  top: 72px;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    border-radius: 10px;
    z-index: 2;
    height: 100%;
    width: 100%;
    & > div {
      margin: 0;
      width: 100%;
      & > div {
        padding-left: 14px;
        width: 100%;
        & > span {
          width: 100%;
        }
      }
    }
  }
  & > button {
    position: absolute;
    bottom: 5px;
    z-index: 2;
    width: 35%;
    height: 30px;
    margin: 0;
    & span {
      font-size: 12px;
    }
  }
`;
