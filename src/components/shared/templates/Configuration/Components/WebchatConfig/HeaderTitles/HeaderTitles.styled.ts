/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

export const StyledHeaderTitles = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  height: fit-content;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0;
`;

export const StyledHeaderTitlesHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]}; */
  padding: 0 20px;
  & > span {
    padding: 5px 10px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.Colors.purples[2]};
    font-weight: 600;
    color: ${({ theme }) => theme.Colors.grays[10]};
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

export const StyledHeaderTitlesBody = styled.div`
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
    margin: 10px 0 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
  }
  & > input {
    width: 100%;
    min-height: 40px;
    padding: 0 20px;
    border: 2px solid ${({ theme }) => theme.Colors.grays[9]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    &:focus {
      border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    }
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
  border: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  resize: none;
  padding: 10px 16px;
  margin: 0;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  color: ${({ theme }) => theme.Colors.grays[1]};
  outline: none;
  background: ${({ theme }) => theme.Colors.grays[9]};
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
    border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
  }
`;
