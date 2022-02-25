import styled from 'styled-components';

export const StyledViewQr = styled.div`
  width: 304px;
  height: 290px;
  margin: auto;
  border-radius: 0.625rem;
  & > :nth-child(1) {
    height: fit-content;
    margin-top: 4px;
    & > :nth-child(1) {
      margin: 0 0.5rem 0.625rem 0.5rem;
      & > :nth-child(1) {
        height: 30px;
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 0.875rem;
        text-align: start;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 0.625rem;
      }
      & > :nth-child(2) {
        height: 0.875rem;
        color: ${({ theme }) => theme.Colors.grays[1]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 0.875rem;
        text-align: start;
        display: flex;
        justify-content: flex-start;
        width: 100%;
      }
    }
    & > :nth-child(2) {
      width: 304px;
      height: 100%;
      min-height: 276px;
      border-radius: 0.625rem;
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      margin-bottom: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        margin: 0 auto;
      }
    }
    & > :nth-child(3) {
      margin: 0 0.5rem;
      & > span {
        height: 1.875rem;
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-weight: ${({ theme }) => theme.fontWeight[400]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        text-align: start;
        display: flex;
        justify-content: flex-start;
        width: 100%;
      }
    }
  }
`;
export const StyledQR = styled.div`
  height: 100%;
  min-height: 270px;
  width: 100%;
  & > div {
    max-width: 240px;
    width: 100%;
    height: 100%;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      text-align: center;
    }
    & > div {
      width: 100%;
      height: 100%;
      min-height: 70px;
      & svg {
        max-width: 50px;
        max-height: 50px;
        & > :last-child {
          & * {
            & path {
              fill: ${({ theme }) => theme.Colors.grays[8]};
              & circle {
                fill: ${({ theme }) => theme.Colors.grays[8]};
              }
            }
          }
        }
      }
    }
    & > :last-child {
      display: flex;
      width: 100%;
      margin-top: 18px;
      & > button {
        margin: auto;
      }
      & > svg {
        margin: auto;
      }
    }
  }
  & > iframe {
    min-height: 270px;
    width: 100%;
    margin-left: 36px;
    & div {
      display: flex;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
    }
    & img {
      height: 230px;
    }
  }
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
    height: 1rem;
    & > p {
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-weight: ${({ theme }) => theme.fontWeight[400]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 0.875rem;
    }
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
`;
