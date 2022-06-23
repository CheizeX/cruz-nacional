import styled from 'styled-components';

export const StyledAddAgentsConfirm = styled.div`
  width: 410px;
  min-width: 320px;
  height: fit-content;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const StyledAddAgentsConfirmHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: 14px;
    font-weight: 500;
  }
  & > button {
    transition: all 0.3s ease-in-out;
    width: 30px;
    height: 30px;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[7]};
    }
    & :hover {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
    & div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 30px;
      height: 30px;
    }
  }
`;
export const StyledAddAgentsConfirmBody = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  & > :first-child {
    background: ${({ theme }) => theme.Colors.purples[1]};
    border-radius: 50%;
    padding: 5px;
    height: 60px;
    width: 60px;
    & * {
      color: ${({ theme }) => theme.Colors.grays[10]};
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    & > :first-child {
      color: ${({ theme }) => theme.Colors.purples[1]};
      font-weight: 700;
    }
    & > :last-child {
      color: ${({ theme }) => theme.Colors.green[1]};
      font-weight: 700;
    }
  }
`;
export const StyledAddAgentsConfirmFooter = styled.div`
  width: 100%;
  height: 70px;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  & > button {
    transition: all 0.3s ease-in-out;
    padding: 0 5px;
    height: 45px;
    width: 160px;
  }
`;
