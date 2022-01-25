import styled from 'styled-components';

export const StyledMainView = styled.div`
  width: 679px;
  height: 551px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  margin: 25px auto;
  & > div {
    display: flex;
    margin-bottom: 8px;
    & > :nth-child(1) {
      width: 34px;
      height: 32px;
      & > div {
        & > * {
          & > svg {
            width: 32px;
            height: 34px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
          }
        }
      }
    }
    & > :nth-child(2) {
      border-radius: 50%;
      width: 18px;
      height: 18px;
      background-color: ${({ theme }) => theme.Colors.grays[6]};
      display: flex;
      justify-content: center;
      align-items: center;
      display: flex;
      position: relative;
      top: 10px;
      left: -6px;
      & > div {
        & * {
          width: 16px;
          height: 16px;
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          top: 1px;
          left: 0px;
          & > svg {
            width: 10px;
            height: 10px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
              stroke: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
    }
  }
  & > span {
    width: 235px;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.Colors.grays[6]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[16]};
    line-height: 19px;
  }
`;
