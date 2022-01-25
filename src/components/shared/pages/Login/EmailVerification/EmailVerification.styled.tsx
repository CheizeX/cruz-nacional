import styled from 'styled-components';

export const StyledGeneralWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const StyledEmailVerificationContainer = styled.div`
  height: 550px;
  width: 470px;
`;

export const StyledEmailVerificationWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  height: 486px;
  width: 470px;
`;

export const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: flex-end;
  width: 100%;
  & > :first-child {
    transform: translate(-85px, 0px);
  }
  & > :last-child {
    transform: translate(-90px, 3px);
  }
  & div {
    display: flex;
    height: 30px;
    justify-content: flex-start;
    margin: 0px 5px;
    & * {
      fill: ${({ theme }) => theme.Colors.purples[1]};
    }
    & svg {
      height: 30px;
      max-width: 85px;
    }
  }
`;

export const StyledInformation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 35px;
  text-align: left;
  width: 100%;
  & span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 16px;
    margin-bottom: 24px;
  }
  & > :first-child {
    font-size: ${({ theme }) => theme.fontSize[16]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
  & button {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 41px;
    margin-top: 8px;
    width: 233px;
    & * {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      margin: 0;
    }
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: flex-end;
  text-align: center;
  & span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    margin-bottom: 10px;
    text-decoration: none;
  }
  & div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & span {
      &:hover {
        font-weight: ${({ theme }) => theme.fontWeight[500]};
      }
    }
  }
`;
