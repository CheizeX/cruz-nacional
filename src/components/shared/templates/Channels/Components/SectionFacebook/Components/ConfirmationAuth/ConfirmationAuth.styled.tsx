import styled from 'styled-components';

export const StyledModalAuth = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;

export const StyledAuthBody = styled.div`
  & > :first-child {
    display: flex;
    width: 100%;
    min-height: 90px;
    align-items: center;
    & > div {
      margin: auto;
      width: 41px;
      height: 41px;
      & > div {
        & * {
          & > svg {
            width: 41px;
            height: 41px;
            & > path {
              fill: ${({ theme }) => theme.Colors.green[3]};
            }
          }
        }
      }
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    & > :nth-child(1) {
      color: ${({ theme }) => theme.Colors.grays[1]};
      width: 100%;
      text-align: center;
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[16]};
      line-height: 1rem;
    }
    & > :nth-child(2) {
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      width: 100%;
      margin-top: 20px;
      text-align: center;
      padding: 0 18px;
    }
  }

  margin-bottom: 20px;
`;

export const StyledLink = styled.div`
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[12]};
  line-height: 0.875rem;
  display: flex;
  flex-direction: column;
  text-align: initial;
  & > div {
    display: flex;
    justify-content: center;
    & > div {
      display: flex;
      height: 1rem;
    }
    & span {
      color: ${({ theme }) => theme.Colors.blue[1]};
      font-weight: ${({ theme }) => theme.fontWeight[400]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 0.875rem;
      margin: 0 0.125rem;
      & > a {
        & > :hover {
          /* background-color: ${({ theme }) => theme.Colors.blue[1]}; */
        }
      }
    }
  }
  margin-bottom: 20px;
`;

export const StyledFooterAuth = styled.div`
  display: flex;
  margin: 0 auto;
  margin: auto;
  display: flex;
  justify-content: center;
`;
