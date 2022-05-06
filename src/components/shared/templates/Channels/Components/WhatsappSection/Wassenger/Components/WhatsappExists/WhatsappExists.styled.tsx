import styled from 'styled-components';

export const StyledWrappperWhatsappUnOfficial = styled.div`
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
      min-height: 30px;
      height: 296px;
      text-align: start;
      padding: 12px;
      & > :nth-child(5) {
        height: 40px;
        display: flex;
        align-items: end;
        justify-content: start;
      }
      & > div {
        padding: 8px 12px;
        & > :first-child {
          top: 3px;
          display: flex;
          & > div {
            max-height: 1.5rem;
          }
          & > span {
            margin-left: 14px;
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

// height: 60px;
// display: flex;
// align-items: end;
