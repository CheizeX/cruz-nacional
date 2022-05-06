import styled from 'styled-components';

export const StyledChangePlan = styled.div`
  width: 550px;
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
export const StyledChangePlanHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: 16px;
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
export const StyledChangePlanBody = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  & > :first-child {
    & * {
      fill: ${({ theme }) => theme.Colors.purples[1]};
      width: 50px;
      height: 50px;
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: 16px;
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
export const StyledChangePlanFooter = styled.div`
  width: 100%;
  height: 80px;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  & > button {
    transition: all 0.3s ease-in-out;
    padding: 0 5px;
    height: 50px;
    width: 205px;
  }
`;
