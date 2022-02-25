import styled from 'styled-components';

export const StyledWrappperWhatsappUnOfficial = styled.div`
  width: 304px;
  height: 100%;
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
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      border-radius: 10px;
      min-height: 30px;
      height: 254px;
      text-align: start;
      padding: 12px;
      & > div {
        padding: 8px 12px;
        & > :first-child {
          top: 3px;
          display: flex;
          & > div {
            max-height: 1.5rem;
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
    }
  }
`;
