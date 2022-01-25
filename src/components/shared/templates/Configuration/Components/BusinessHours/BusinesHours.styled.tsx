import styled from 'styled-components';

export const StyledBusinessHours = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 352px;
  height: 260px;
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
  height: 60px;
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
  height: 100px;
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
  padding: 10px 0;
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
export const StyledSetBusinessTimeSetHourStartAndFinish = styled.div`
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
`;
export const StyledSetSecondBusinessTimeSetHourStartAndFinish = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 23px;
  /* position: relative; */
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
