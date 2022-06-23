/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

export const StyledAddAgents = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 320px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

export const StyledAddAgentsHeader = styled.div`
  position: relative;
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  padding-bottom: 7px;
  & > span {
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.Colors.grays[5]};
  }
  & > span:last-child {
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
`;

export const StyledAddAgentsBody = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex-direction: column;
  padding: 0px 5px 0 5px;
  & > svg {
    margin-top: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding: 5px;
    background-color: ${({ theme }) => theme.Colors.purples[2]};
    border: 3px solid ${({ theme }) => theme.Colors.grays[10]};
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    & > * {
      color: ${({ theme }) => theme.Colors.grays[10]};
    }
  }
  & > button {
    position: absolute;
    bottom: 0px;
    height: 40px;
    width: 100%;
    & > span {
      font-weight: 600;
    }
  }
`;
export const StyledTotalAgents = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  & > span {
    width: 100%;
    display: flex;
    font-weight: 400;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.Colors.grays[5]};
    & > span {
      color: ${({ theme }) => theme.Colors.green[1]};
      font-size: 16px;
      display: flex;
      width: 30px;
      border: 1px solid ${({ theme }) => theme.Colors.grays[8]};
      border-radius: 5px;
      justify-content: center;
    }
  }
  & > span:first-child {
    & > span {
      color: ${({ theme }) => theme.Colors.green[2]};
    }
  }
  & > span:nth-child(2) {
    & > span {
      color: ${({ theme }) => theme.Colors.orange[6]};
    }
  }
  & > span:nth-child(3) {
    & > span {
      color: ${({ theme }) => theme.Colors.green[2]};
    }
  }
  & > span:last-child {
    & > span {
      color: ${({ theme }) => theme.Colors.orange[6]};
    }
  }
`;
export const StyledTotalPriceContainer = styled.div`
  width: 100%;
  margin-top: 5px;
  & > :first-child {
    color: ${({ theme }) => theme.Colors.purples[2]};
    padding-left: 14px;
    font-weight: 500;
    font-size: 12px;
  }
  & > input {
    font-size: 14px;
    margin-top: 5px;
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.grays[5]};
  }
`;
export const StyledTotalAgentsPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  max-height: fit-content;
  font-weight: 400;
  & > span {
    font-size: 16px;
    color: ${({ theme }) => theme.Colors.purples[2]};
  }
`;

export const StyledInputTypeNumber = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 27px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.Colors.purples[1]};
  }
`;
