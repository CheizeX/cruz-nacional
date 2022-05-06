import styled from 'styled-components';

export const StyledWrapperQRSection = styled.div`
  width: 304px;
  height: 290px;
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
      min-height: 306px;
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

export const StyledLinkQR = styled.div`
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
  }
`;

export const StyledBodyQR = styled.div`
  height: 100%;
  min-height: 312px;
  width: 100%;
  position: relative;
  & > img {
    max-width: 310px;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
  & > button {
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    & > svg {
      position: absolute;
      z-index: 1;
      top: -130px;
      right: 14px;
      width: 20px;
      height: 20px;
      width: 30px;
      height: 30px;
    }
  }
`;

export const StyledFailedImage = styled.div`
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    height: 36px;
    & * {
      & > svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
  }
  & > button {
    margin-top: 20px;
  }
  & > :last-child {
    margin-top: 20px;
  }
`;
