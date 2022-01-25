import styled from 'styled-components';
import { IPropsTagModal } from './ModalChart.interface';

export const StyledComponentChart = styled.div`
  width: 592px;
  height: 480px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 1.25rem 0 1.125rem 0;
`;

export const StyledHeaderComponentChart = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-left: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 1rem;
  }
  & > button {
    width: 2.1rem;
    height: 1rem;
    & > div {
      & * {
        & > svg {
          width: 0.75;
          height: 0.8rem;
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[6]};
          }
        }
      }
    }
  }
`;
export const StyledBodyModalChart = styled.div`
  height: 390px;
  width: 100%;
  display: flex;
  & > :nth-child(1) {
    max-width: 281px;
    width: 281px;
    border-right: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    height: 100%;
    & > div {
      width: 234px;
      height: 335px;
      display: flex;
      flex-direction: column;
      margin: 20px 20px;
      max-width: 234px;

      & > :nth-child(1) {
        width: 72px;
        height: 72px;
        max-width: 72px;
        max-height: 72px;
        margin: 0 auto;
        & > img {
          max-width: 72px;
          max-height: 72px;
          width: 72px;
          height: 72px;
          object-fit: cover;
          border-radius: 50%;
        }
        & > div {
          max-width: 72px;
          max-height: 72px;
          & * {
            & > svg {
              max-width: 72px;
              max-height: 72px;
              width: 72px;
              height: 72px;
            }
          }
        }
      }
      & > :nth-child(2) {
        display: flex;
        flex-direction: column;
        & > span {
          color: ${({ theme }) => theme.Colors.grays[1]};
        }
        & > :nth-child(1) {
          margin-top: 28px;
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          font-size: ${({ theme }) => theme.fontSize[16]};
          line-height: 19px;
        }
      }
      & > :nth-child(3) {
        display: flex;
        margin: 0 auto;
        justify-content: space-around;
        width: 110px;
        padding: 10px 0;
        & > div {
          color: ${({ theme }) => theme.Colors.grays[10]};
          padding-top: 6px;
          & > div {
            top: -2px;
            left: 4px;
            & * {
              & > svg {
                width: 16px;
                height: 16px;
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[10]};
                }
              }
            }
          }
        }
      }
      & > :nth-child(4) {
        margin-bottom: 4px;
        & > div {
          margin: 0 auto;
        }
      }
      & > :nth-child(5) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      & > span {
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
    }
  }
  & > :nth-child(2) {
    max-width: 310px;
    height: 300px;
    max-height: 300px;
    width: 310px;
    margin: 12px auto;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
  }
`;
export const StyledFooterModal = styled.div`
  border: 1px solid ${({ theme }) => theme.Colors.grays[9]};
`;

export const StyledContainerTagModal = styled.div<IPropsTagModal>`
  width: 215px;
  height: 32px;
  border-radius: 8px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.Colors.grays[10]};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  font-size: ${({ theme }) => theme.fontSize[12]};
  line-height: 14px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  ${({ isColor }) => isColor && `background-color: ${isColor}`};
`;
