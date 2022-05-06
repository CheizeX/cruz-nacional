/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

export const StyledPredefinedAgentMessages = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  height: 405px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 5px 0 0;
`;

export const StyledPredefinedAgentMessagesHeader = styled.div`
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

export const StyledPredefinedAgentMessagesBody = styled.div`
  min-width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
  & > span {
    color: ${({ theme }) => theme.Colors.purples[2]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    width: 100%;
    margin: 0px 0 0px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
  }
  & > :first-child {
    margin: 10px 0 20px 0;
    padding: 0px 5px;
  }
  & > button {
    min-height: 40px;
    margin-top: 10px;
    width: 100%;
    & > span {
      font-weight: 400;
    }
  }
`;

export const StyledTextArea = styled.textarea`
  width: 300px;
  min-height: 80px;
  height: 100%;
  outline: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  border: none;
  resize: none;
  padding: 10px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;
  color: ${({ theme }) => theme.Colors.grays[4]};
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.Colors.grays[7]};
    padding: 0 10px;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    color: ${({ theme }) => theme.Colors.grays[5]};
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.Colors.purples[1]};
  }
`;
