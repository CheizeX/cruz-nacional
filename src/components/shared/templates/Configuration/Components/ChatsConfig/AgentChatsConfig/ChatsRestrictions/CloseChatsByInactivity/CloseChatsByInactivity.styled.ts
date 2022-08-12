/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

export const StyledCloseChatsByInactivity = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  height: max-content;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 5px 0 0;
`;

export const StyledCloseChatsByInactivityHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 25px;
  & > span {
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.grays[1]};
  }

  & > div {
    transform: translateX(30%);
    & > div {
      & > div {
        & > svg {
          width: 18px;
          height: 18px;
          & > path {
            fill: ${({ theme }) => theme.Colors.purples[3]};
          }
        }
      }
    }
  }
  & > svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.Colors.grays[1]};
  }
`;

export const StyledCloseChatsByInactivityBody = styled.div`
  min-width: 100%;
  min-height: 150px;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px 0 20px;
  & > div {
    display: flex;
    padding: 0px 0;
    height: fit-content;
    width: 100%;
    flex-direction: column;
    & > div {
      display: flex;
      & > :first-child {
        box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.Colors.grays[6]};
        width: 100px;
        height: 30px;
        border-radius: 10%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        background-color: ${({ theme }) => theme.Colors.green[2]};
        margin-left: 60px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.Colors.grays[5]};
      }
      & > :nth-child(5) {
        margin-left: 40px;
        margin-top: 5px;
      }
    }
    & > button {
      margin-top: 26px;
      height: 40px;
      width: 100%;
      & > span {
        font-weight: 400;
      }
    }
  }
  & > :nth-child(1) {
    transition: all 0.5s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 5px;
    margin-bottom: 11px;
  }
`;

export const StyledInputTypeNumber = styled.input`
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.Colors.grays[6]};
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 7%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.Colors.purples[1]};
  }
`;
