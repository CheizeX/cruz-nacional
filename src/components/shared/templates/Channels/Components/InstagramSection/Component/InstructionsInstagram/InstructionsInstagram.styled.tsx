import styled from 'styled-components';

export const StyledIntructionsInstagram = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;

export const StyledInstructionsBody = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  min-height: 300px;
  padding: 20px;
  margin-top: 10px;
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 10px;
    width: 100%;
    min-height: 280px;
    padding: 12px;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
    & > div {
      display: flex;
      min-height: 30px;
      padding-left: 10px;
      flex-direction: column;
      text-align: start;
      margin-bottom: 3px;
      & div {
        top: 1px;
        & > div {
          & * {
            & > svg {
              width: 14px;
              height: 14px;
              & > path {
                fill: ${({ theme }) => theme.Colors.green[3]};
              }
            }
          }
        }
      }
      & > span {
        margin-left: 20px;
        color: ${({ theme }) => theme.Colors.grays[1]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        display: flex;
        align-items: center;
}
        }
      }
    }
  }
`;
