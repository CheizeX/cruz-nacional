import styled, { css } from 'styled-components';
import { IPropsRole } from './UserFilter.interface';

export const StyledWrapperFilterUser = styled.div`
  position: relative;
  & > button {
    width: 14px;
    height: 14px;
  }
`;
export const StyledUserFilter = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 343px;
  z-index: 3;
  position: absolute;
  top: 24px;
  right: -8px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 0px #0000004a;
`;

export const StyledTab = styled.div`
  margin-top: 9px;
  & > div:first-child {
    width: 293px;
    margin-bottom: 16px;
    button:first-child {
      display: none;
    }
    button:last-child {
      & > div {
        & > div {
          & > div {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[7]};
              }
            }
          }
        }
      }
    }
  }
  & > div:last-child {
    border-radius: 10px;
    padding: 7px 7px 2px 7px;
  }
`;

export const SeletedRole = styled.button<IPropsRole>`
  display: flex;
  width: 295px;
  padding: 6px;
  cursor: pointer;
  & > :nth-child(2) {
    & > div {
      & > * {
        & > svg {
          & > path {
            fill: ${({ theme, active }) =>
              active && active === true
                ? theme.Colors.purples[3]
                : theme.Colors.grays[7]};
          }
        }
      }
    }
  }
  & span {
    padding-top: 4px;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: ${({ theme }) => theme.fontSize[14]};
    margin-left: 38px;
  }
`;
export const StyledButtonActive = styled.div<IPropsRole>`
  border-radius: 50%;
  width: 24px;
  min-height: 24px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 17px;
  ${({ active }) =>
    active &&
    css<IPropsRole>`
      border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;
export const StyledRadioRole = styled.div<IPropsRole>`
  height: 14px;
  width: 14px;
  max-height: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  display: flex;
  margin: auto;
  align-content: center;
  text-align: center;
  position: relative;
  top: 3px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  ${({ active }) =>
    active &&
    css<IPropsRole>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;

export const StyledContainer = styled.div`
  width: 343px;
  margin: 16px 0;
  height: fit-content;
  & > div {
    padding: 0 24px;
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
  & > div:last-child {
    height: fit-content;
    width: 343px;
    & > div {
      & > :nth-child(2) {
        /* & > :nth-child(2) {
          margin-left: 3px;
        } */
      }
    }
  }
`;

export const StyledUserHeader = styled.div`
  width: 340px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  padding-top: 13px;
  margin-bottom: 16px;
  & > div {
    width: 34px;
    height: 17px;
    & > div {
      & > div {
        & > svg {
          width: 12px;
          height: 12px;
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[6]};
          }
        }
      }
    }
  }
  & > span {
    margin-left: 23px;
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    color: ${({ theme }) => theme.Colors.grays[1]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
`;
export const StyledOpen = styled.div`
  :hover {
    & svg {
      & > * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
  }
  & > div {
    width: 17px;
    height: 17px;
    & > div {
      & > div {
        & > svg {
          width: 17px;
          height: 17px;
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[6]};
          }
        }
      }
    }
  }
`;

export const StyledClose = styled.button`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  & > div {
    width: 34px;
    height: 17px;
    & > div {
      & > div {
        & > svg {
          width: 12px;
          height: 12px;
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[6]};
          }
        }
      }
    }
  }
`;

export const StyledFooter = styled.div`
  width: 343px;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  & > button {
    width: 120px;
  }
`;
