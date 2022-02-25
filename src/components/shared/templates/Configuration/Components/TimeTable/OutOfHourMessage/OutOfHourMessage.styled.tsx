/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

export const StyledOutOfHourMessage = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 352px;
  max-height: 260px;
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
export const StyledOutOfHourMessageHeader = styled.div`
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

export const StyledOutOfHourMessageBodyWithoutSet = styled.div`
  width: 200px;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  & > svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.Colors.grays[6]};
    margin-top: 20px;
  }
  & > span {
    text-align: center;
    margin-bottom: 20px;
  }
  & > button {
    width: 100%;
    height: 40px;
  }
`;
export const StyledOutOfHourMessageBodySetted = styled.div`
  width: 200px;
  max-height: 200px;
  padding-top: 20px;
  /* padding-bottom: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  & > button {
    margin-top: 5px;
    width: 150%;
    min-height: 40px;
    transform: translateY(10px);
  }
  input::placeholder {
    color: red;
    font-size: 1.2em;
    font-style: italic;
  }
`;
export const StyledOutOfHourTextarea = styled.textarea`
  width: 300px;
  min-height: 100px;
  height: 100%;
  outline: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  border: none;
  resize: none;
  padding: 10px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 5px;
  color: ${({ theme }) => theme.Colors.grays[3]};
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
