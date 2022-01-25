import styled from 'styled-components';
import { IPropsDate } from './DateRange.interface';

export const StyledDateRange = styled.div<IPropsDate>`
  width: 256px;
  height: 150px;
  margin: 0 auto;
  margin-top: 16px;
  position: relative;
  & > span {
    padding-left: 10px;
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
  }
  & > :nth-child(2) {
    color: ${({ theme }) => theme.Colors.grays[5]};
  }
  & > :nth-child(3) {
    & > button {
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme, focusedStart }) =>
                focusedStart && focusedStart === true
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[6]};
            }
          }
        }
      }
    }
  }
  & > :nth-child(6) {
    color: ${({ theme }) => theme.Colors.grays[5]};
  }
  & > :nth-child(7) {
    & > button {
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme, focusedEnd }) =>
                focusedEnd && focusedEnd === true
                  ? theme.Colors.purples[2]
                  : theme.Colors.grays[6]};
            }
          }
        }
      }
    }
  }
  & > div {
    margin-bottom: 16px;
    margin-top: 10px;
  }
`;

export const StyledFirstDate = styled.div`
  position: absolute;
  box-shadow: 0px 0px 7px 0px #0000004a;
  left: 272px;
  top: -34px;
`;

export const StyledSecondDate = styled.div`
  position: absolute;
  box-shadow: 0px 0px 7px 0px #0000004a;
  z-index: 1;
  background: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  left: 272px;
  top: 0px;
  & > :first-child {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    align-items: center;
    padding: 2px 6px;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    & > :nth-child(1) {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      padding-left: 10px;
    }
    & > :nth-child(2) {
      height: 18px;
      top: 1px;
      cursor: pointer;
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
          }
        }
      }
    }
  }
  & > :nth-child(3) {
    border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    & > button {
      margin: 10px auto;
    }
  }
`;
