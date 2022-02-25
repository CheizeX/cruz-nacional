/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

export const StyledMaxConversations = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  height: fit-content;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 5px 0 0;
`;

export const StyledMaxConversationsHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 25px;
  & > span {
    font-weight: 500;
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

export const StyledMaxConversationsBody = styled.div`
  min-width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
  & > button {
    height: 40px;
    width: 100%;
    & > span {
      font-weight: 400;
    }
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
