import styled from 'styled-components';

export const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  & article {
    & div {
      & > :nth-child(2) {
        height: 200px;
      }
    }
  }
`;

export const StyledLoginView = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 20px;
  width: 411px;
  height: 350px;
  padding: 30px 13px 0px 13px;
  margin: 25px;
  & > span {
    width: 113px;
    height: 15px;
    margin-left: 44px;
  }
  button {
    width: 340px;
    margin: auto;
  }
  & > form {
    & > span {
      padding-left: 44px;
    }
  }
`;
export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 31px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;
export const StyledFirstInput = styled.div`
  width: 340px;
  height: 40px;
  margin: auto;
  margin-bottom: 16px;
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    & > input {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      width: 100%;
    }
  }
  button {
    display: none;
  }
`;

export const StyledSecondInput = styled.div`
  width: 340px;
  height: 40px;
  margin: auto;
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    & > input {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      width: 100%;
    }
    button:first-child {
      display: none;
    }
    button:last-child {
      width: 20px;
      height: 13px;
      margin-right: 12px;
    }
  }
`;

export const StyleErrors = styled.p`
  margin: 1px;
  color: ${({ theme }) => theme.Colors.orange[1]};
  font-size: ${({ theme }) => theme.fontSize[10]};
  padding-left: 14px;
  padding-top: 2px;
`;

export const StyledLinkTo = styled.div`
  padding-left: 196px;
  margin-bottom: 30px;
  padding-top: 14px;
  span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
`;
