import styled from 'styled-components';
import { IPropsWrappeReport } from './RightReports.interface';

export const StyledRightPanel = styled.div`
  width: 725px;
  height: 100%;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;
export const StyledHeaderRightPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 23px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > :first-child {
    width: 234px;
    display: flex;
    align-items: center;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 17px;
      padding-top: 3px;
    }
  }
  & > :nth-child(2) {
    width: 320px;
    display: flex;
    justify-content: start;
    display: flex;
    align-items: center;
    //position: relative;
    & > :first-child {
      width: 16rem;
      height: 2.4rem;
      & > input {
        width: 100%;
      }
      & > button:first-child {
        display: none;
      }
      & > button:last-child {
        & > div {
          & * {
            & > svg {
              width: 14px;
              height: 14px;
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[7]};
              }
            }
          }
        }
      }
    }

    & > span {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 17px;
    }

    & > button {
      cursor: pointer;
      // position: absolute;
      position: relative;
      width: 60px;
      height: auto;
      justify-content: center;
      display: flex;
      align-items: center;
      margin-left: 18px;
      text-align: center;
      border-left: 1px solid ${({ theme }) => theme.Colors.grays[9]};
      & > div {
        width: 100%;
        margin-left: 16px;
        & * {
          width: 24px;
          height: 22px;
        }
      }
      &:hover {
        & > div {
          & * {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[5]};
              }
            }
          }
        }
      }
      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
    & > :nth-child(3) {
      position: relative;
      & > div {
        position: absolute;
        right: 16px;
        z-index: 2;
        top: 20px;
      }
    }
  }
`;
export const StyledCount = styled.div<IPropsWrappeReport>`
  min-width: 23px;
  min-height: 19px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  line-height: 14px;
  margin: 8px 12px;
  color: ${({ theme }) => theme.Colors.grays[10]};
  font-weight: 700;
  font-size: 12px;
  width: fit-content;
  position: relative;
  top: 1px;
  background-color: ${({ theme, isColor }) =>
    isColor ? theme.Colors.purples[2] : theme.Colors.grays[6]};
  border-radius: 50%;
`;

export const ContainerDropdown = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 6px 6px;
  width: 100px;
  & > button {
    height: 26px;
    display: flex;
    border-radius: 4px;
    justify-content: flex-start;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
    }
    &:active {
      & * {
        color: ${({ theme }) => theme.Colors.purples[2]};
        fill: ${({ theme }) => theme.Colors.purples[2]};
      }
    }
  }
  & span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
  & svg {
    height: 20px;
    width: 20px;
    & path {
      fill: ${({ theme }) => theme.Colors.grays[3]};
    }
  }
`;
