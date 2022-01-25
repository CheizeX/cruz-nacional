import styled from 'styled-components';

export const StyledViewQr = styled.div`
  width: 304px;
  height: 352px;
  margin: auto;
  border-radius: 0.625rem;
  & > :nth-child(1) {
    height: fit-content;
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
      height: 232px;
      border-radius: 0.625rem;
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      margin-bottom: 10px;
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
  & > img {
    max-width: 228px;
    min-height: 232px;
    padding: 6px;
    min-width: 228px;
    border-radius: 10px;
    max-height: 238px;
  }
`;
export const StyledLink = styled.p`
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
