import styled from 'styled-components';

export const StyledSelectedPlanHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  width: 100%;
  & > button {
    transition: all 0.3s ease;
    margin: 10px 0;
    height: 60px;
    border-radius: 10px;
    background: ${({ theme }) => theme.Colors.grays[8]};
    margin-right: 20px;
  }
  & > :first-child {
    background: ${({ theme }) => theme.Colors.green[3]};
    & :hover {
      background: ${({ theme }) => theme.Colors.green[4]};
    }
  }
  & > :nth-child(2) {
    background: ${({ theme }) => theme.Colors.blue[2]};
    & :hover {
      background: ${({ theme }) => theme.Colors.blue[1]};
    }
  }
`;

export const StyledInvoicesSection = styled.div`
  min-width: 320px;
  min-height: 200px;
  width: 600px;
  height: 500px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 0 20px;
  overflow: hidden;
  color: ${({ theme }) => theme.Colors.grays[4]};
  & ::-webkit-scrollbar {
    display: none;
  }
  & > :nth-child(1) {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    margin-bottom: 5px;
    & > :first-child {
      height: 100%;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    & > button {
      transition: all 0.3s ease;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      & :hover {
        cursor: pointer;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[5]};
        }
      }
      & * {
        width: 100%;
      }
    }
  }
  & > :nth-child(2) {
    padding: 0;
    & > :first-child {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-auto-rows: 30px;
      font-size: 12px;
      font-weight: bold;
      color: ${({ theme }) => theme.Colors.grays[1]};
      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
    }
  }
  & > section {
    border-radius: 10px;
    height: 79%;
    padding-bottom: 20px;

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
      grid-template-columns: 1fr 1fr 1fr 1fr;
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
        height: 30px;
        width: 80px;
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
      & > :last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
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
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
export const StyledMethodsSection = styled.div`
  min-width: 320px;
  min-height: 200px;
  max-width: 600px;
  max-height: 500px;
  width: fit-content;
  height: fit-content;
  background: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
`;
