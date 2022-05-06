import styled from 'styled-components';

export const StyledContactBox = styled.div`
  width: 100%;
  height: 516px;
  & > div {
    /* & * { */
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    /* } */
  }
`;
export const StyledListContacts = styled.div`
  max-width: 1260px;
  max-height: 545px;
  height: 100%;
  background-color: #ffffff;
  width: 100%;
  margin: 24px;
  margin-top: 5px;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 5px;
  overflow: hidden;
  color: #707070;
  & > :first-child {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
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
      grid-template-columns: 1.5fr 1fr 1fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
      font-size: 12px;
      font-weight: 600;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        & * {
          & > svg {
            width: 25px;
            height: 25px;
          }
        }
      }
      & > div,
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
          width: 28px;
          height: 28px;
          & * {
            & > svg {
              width: 25px;
              height: 25px;
            }
          }
        }
        & > :nth-child(3) {
          & > div {
            & * {
              & > svg {
                width: 22px;
                height: 20px;
              }
            }
          }
        }
        & > button {
          width: 28px;
          height: 18px;
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
            & * {
              & > svg {
                width: 15px;
                height: 15px;
              }
            }
          }
        }
      }
      & > span:nth-child(1) {
        justify-content: start;
        margin-left: 10px;
        & > div {
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${({ theme }) => theme.Colors.purples[3]};
          margin-right: 10px;
          color: ${({ theme }) => theme.Colors.grays[10]};
        }
      }
    }
  }
`;

export const StyledAllIcon = styled.div`
  position: relative;
  & > div {
    position: absolute;
    & :nth-child(1) {
      top: -4px;
      left: 4px;
      & * {
        & > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    & :nth-child(2) {
      top: 14px;
      left: 18px;
      & * {
        & > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    & :nth-child(3) {
      top: 14px;
      right: 10px;
      & * {
        & > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
