import styled from 'styled-components';

export const StyledWrapperRequestProcess = styled.div`
  padding: 20px 0;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    display: flex;
    max-width: 304px;
  }
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    border-radius: 10px;
    min-height: 340px;
    width: 300px;
    margin: 10px auto;
    padding: 20px;
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      border-radius: 10px;
      min-height: 260px;
      height: 300px;
      text-align: start;
      padding: 12px;
      & > :first-child {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        & > div {
          & * {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.orange[3]};
              }
            }
          }
        }
      }
      & > span {
        display: flex;
        text-align: justify;
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[14]};
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
    }
  }
`;
