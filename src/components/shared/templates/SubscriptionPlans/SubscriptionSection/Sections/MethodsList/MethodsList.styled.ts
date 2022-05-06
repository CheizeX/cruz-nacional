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

export const StyledMethodsSection = styled.div`
  min-width: 320px;
  min-height: 200px;
  width: 600px;
  height: fit-content;
  max-height: 500px;
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
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
    height: 100%;
    max-height: 310px;
    overflow: scroll;
    & ::-webkit-scrollbar {
      display: none;
    }
    & > :nth-child(2n) {
      border-radius: 10px;
      background: ${({ theme }) => theme.Colors.grays[10]};
    }
    & > div {
      width: 100%;
      background: ${({ theme }) => theme.Colors.grays[9]};
      border-radius: 10px;
      height: 56px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
          outline: 1px solid ${({ theme }) => theme.Colors.grays[8]};
          margin-right: 20px;
          &:hover {
            cursor: pointer;
          }
        }
        & > svg {
          transition: all 0.3s ease;
          width: 24px;
          height: 24px;
          fill: ${({ theme }) => theme.Colors.grays[8]};
          &:hover {
            cursor: pointer;
            fill: ${({ theme }) => theme.Colors.orange[1]};
          }
        }
      }
    }
  }
`;

export const StyledMethodFooterSaveChanges = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > button {
    transition: all 0.3s ease;
    height: 50px;
    min-width: 250px;
  }
`;
export const StyledMethodFooterCancelSubscription = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > button {
    transition: all 0.3s ease;
    height: 50px;
  }

  & > :last-child {
    padding: 0;
    border: 1px solid transparent;
    & :hover {
      & > span {
        color: ${({ theme }) => theme.Colors.orange[1]};
      }
    }
    & > span {
      transition: all 0.3s ease;
      color: ${({ theme }) => theme.Colors.grays[8]};
    }
  }
`;
export const StyledMethodFooterDeletePaymentMethod = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > button {
    transition: all 0.3s ease;
    height: 50px;
    width: 200px;
  }
`;

export const StyledCardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCancelSubscritionInfo = styled.div`
  min-width: 520px;
  width: 600px;
  height: 500px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    & > :first-child {
      font-size: 16px;
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    & > button {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > :hover {
        cursor: pointer;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[5]};
        }
      }
    }
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    height: 310px;
    & > span {
      text-align: center;
      width: 100%;
      font-size: 16px;
      margin-bottom: 20px;
      background-color: ${({ theme }) => theme.Colors.orange[1]};
      font-weight: 600;
      color: ${({ theme }) => theme.Colors.grays[10]};
      padding: 10px 20px;
      border-radius: 2px;
    }
    & > p {
      margin-bottom: 15px;
      line-height: 1.3;
      font-size: 14px;
    }
  }
`;

export const StyledDeletePaymentMethodConfirmation = styled.div`
  min-width: 520px;
  width: 600px;
  height: 300px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    & > :first-child {
      font-size: 16px;
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    & > button {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > :hover {
        cursor: pointer;
        & * {
          fill: ${({ theme }) => theme.Colors.grays[5]};
        }
      }
    }
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    height: 120px;
    & > div {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
      & * {
        width: 60px;
        height: 60px;
        fill: ${({ theme }) => theme.Colors.purples[2]};
      }
    }
    & > p {
      margin-bottom: 15px;
      line-height: 1.3;
      font-size: 18px;
      text-align: center;
    }
  }
`;
