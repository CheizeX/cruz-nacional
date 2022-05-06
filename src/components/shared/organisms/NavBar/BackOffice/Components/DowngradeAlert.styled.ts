import styled from 'styled-components';
import { IUsersToSelectProps } from './DowngradeAlert.interface';

export const StyledDowngradeUsersSelectContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;
export const StyledDowngradeUsersSelect = styled.div<IUsersToSelectProps>`
  width: 100%;
  max-width: 650px;
  height: fit-content;
  min-height: 65px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: red;
  ${({ validateIfAllAgentsAreSelected, theme }) =>
    validateIfAllAgentsAreSelected &&
    `
    background-color: ${theme.Colors.green[4]};
  `}
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  & > span {
    width: 69%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    text-transform: uppercase;
    align-items: center;
    text-align: center;
    font-size: ${({ theme }) => theme && theme.fontSize[14]};
    ${({ validateIfAllAgentsAreSelected }) =>
      validateIfAllAgentsAreSelected &&
      `
    text-align:center;
  `}
    & > div {
      margin-right: 10px;
      width: 30px;
      height: 30px;
      & * {
        fill: ${({ theme }) => theme && theme.Colors.grays[10]};
      }
      & svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  & > button {
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    min-height: 50px;
    padding: 0px;
    margin: 0;
    margin-right: 5px;
    border-left: 3px solid ${({ theme }) => theme && theme.Colors.grays[10]};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    & :hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1);
      & span {
        padding: 5px;
        text-decoration-style: dashed;
      }
    }
    & span {
      transition: all 0.3s ease-in-out;
      height: 100%;
      font-size: ${({ theme }) => theme && theme.fontSize[14]};
    }
  }
`;
