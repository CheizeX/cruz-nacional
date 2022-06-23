import styled from 'styled-components';

export const WrapperFilterByDay = styled.div`
  position: relative;
  & > button {
    //position: relative;
    cursor: pointer;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      height: 33px;
      border-radius: 16px;
      & > span {
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
      & > :first-child {
        & * {
          display: flex;
          justify-content: center;
          align-items: center;
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
          }
        }
      }
      & > :last-child {
        width: 20px;
        & * {
          width: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > svg {
            width: 8px;
            height: 8px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[3]};
            }
          }
        }
      }
    }
  }
  & > div {
    position: absolute;
    right: 0;
    z-index: 1;
    box-shadow: 0px 0px 7px 0px #0000004a;
    border-radius: 10px;
    max-height: 314px;
    height: fit-content;
    width: 260px;
    padding: 10px 8px;
    background: ${({ theme }) => theme.Colors.grays[10]};
    & > button {
      margin: 0 auto;
      border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
      width: 80%;
    }
  }
`;
