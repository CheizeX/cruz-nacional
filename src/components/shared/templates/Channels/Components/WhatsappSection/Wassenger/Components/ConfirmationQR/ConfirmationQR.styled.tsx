import styled from 'styled-components';
import { IPropsConfirmationQR } from './ConfirmationQR.interface';

export const StyledConfirmationQR = styled.div<IPropsConfirmationQR>`
  width: 304px;
  height: 100%;
  max-height: 418px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin-top: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    border-radius: 10px;
    min-height: 280px;
    width: 300px;
    margin: 10px auto;
    padding: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    max-height: 342px;
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      border-radius: 10px;
      min-height: 250px;
      height: 288px;
      text-align: start;
      padding: 12px;
      & > :nth-child(4) {
        height: 60px;
        display: flex;
        align-items: end;
        justify-content: start;
      }
      & > div {
        padding: 8px 12px;
        & > :first-child {
          top: 3px;
        }
        & > span {
          margin-left: 20px;
          color: ${({ theme }) => theme.Colors.grays[1]};
          font-weight: ${({ theme }) => theme.fontWeight[500]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
          display: flex;
          align-items: center;
          text-align: start;
        }
        & > div {
          & * {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.green[3]};
              }
            }
          }
        }
      }
      & > :nth-child(4) {
        display: flex;
        height: 90px;
        align-items: center;
        width: 100%;
        justify-content: center;
        display: flex;
        margin: 0 auto;
        & > div {
          display: flex;
          align-items: center;
          & > span {
            min-width: 186px;
            color: ${({ theme }) => theme.Colors.grays[1]};
            font-weight: ${({ theme }) => theme.fontWeight[600]};
            font-size: ${({ theme }) => theme.fontSize[14]};
            line-height: 14px;
            margin-left: 8px;
            width: 100%;
          }
        }
      }
    }
  }
`;
