/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

export const StyledTimeOutClientWithoutAsignation = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  height: 585px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 5px 0 0;
`;

export const StyledTimeOutClientWithoutAsignationHeader = styled.div`
  position: relative;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 25px;
  transition: all 0.2s ease-in-out;
  & > span {
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > button {
    & :hover {
      cursor: pointer;
      & > svg {
        transition: all 0.2s ease-in-out;
        transform: translateX(-2px);
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.Colors.purples[2]};
      }
    }
    & > svg {
      width: 20px;
      height: 20px;
      fill: ${({ theme }) => theme.Colors.grays[5]};
    }
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
`;

export const StyledTimeOutClientWithoutAsignationBody = styled.div`
  min-width: 100%;
  min-height: 350px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    & > span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    & > div {
      margin: 5px 0;
      font-size: 12px;
      display: flex;
      justify-content: start;
      align-items: center;
      padding-left: 5px;
      & > span {
        & > input {
          margin-left: 7px;
          margin-right: 7px;
          border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
          border-radius: 5px;
          &: focus {
            outline: none;
            border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
          }
        }
      }
    }
  }
  & > button {
    width: 100%;
  }
`;
export const ToogleComponentForMappedRestrictionsNoSel = styled.button`
  min-width: 32px;
  width: 32px;
  min-height: 16px;
  height: 16px;
  border-radius: 27px;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  box-shadow: inset 0 0 2px ${({ theme }) => theme.Colors.grays[8]};
  display: flex;
  align-items: center;
  padding: 0;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    cursor: pointer;
  }
  & > div {
    transition: all 0.3s ease-in-out;
    transform: translateX(2px);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.grays[5]};
  }
`;

export const ToogleComponentForMappedRestrictions = styled.button`
  min-width: 32px;
  width: 32px;
  height: 16px;
  border-radius: 27px;
  background-color: rgba(30, 193, 67, 0.22);
  display: flex;
  align-items: center;
  padding: 0;
  &:hover {
    cursor: pointer;
    outline: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  }
  & > div {
    transition: all 0.3s ease-in-out;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.green[4]};
    transform: translateX(16px);
  }
`;
export const StyledTextArea = styled.textarea`
  width: 300px;
  min-height: 70px;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  resize: none;
  padding: 10px 16px;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
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

export const StyledTimeOutClientWithoutAsignationBodyTitle = styled.div``;
