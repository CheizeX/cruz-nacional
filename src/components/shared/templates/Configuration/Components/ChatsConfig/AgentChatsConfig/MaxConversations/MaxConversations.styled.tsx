/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

interface IProps {
  quantity: number;
}
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
  & > :first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
  }
`;

export const StyledInputContainer = styled.div<IProps>`
  height: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.Colors.purples[1]};
  }
  & > span {
    padding: 7px;
    color: ${({ theme, quantity }) =>
      quantity === 0 ? theme.Colors.grays[7] : theme.Colors.green[4]};
    font-size: 12px;
    line-height: 1.3;
    text-align: center;
  }
`;

export const StyledInputTypeNumber = styled.input`
  width: 70px;
  height: 40px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0 5px 0 30px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.Colors.purples[1]};
    border-top: 1px solid ${({ theme }) => theme.Colors.purples[1]};
    border-left: 1px solid ${({ theme }) => theme.Colors.purples[1]};
    outline: none;
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
