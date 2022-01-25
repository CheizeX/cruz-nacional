import styled from 'styled-components';

export const StyledLoginPassword = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 411px;
  height: 370px;
  border-radius: 20px;
  margin-top: 27px;
  margin-bottom: 27px;
  button {
    width: 340px;
    margin-left: 36px;
    margin-top: 20px;
  }
`;

export const StyledTitle = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-top: 32px;
  margin-bottom: 23px;
  justify-content: center;
  align-items: flex-end;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;

export const StyledSubTitle = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  margin-bottom: 26px;
  justify-content: center;
  align-items: flex-end;
  padding-left: 35px;
  padding-right: 35px;
  text-align: center;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;

export const StyledInput = styled.div`
  width: 340px;
  height: 40px;
  margin-left: 36px;
  & > div {
    background: ${({ theme }) => theme && theme.Colors.grays[9]};
  }
  button:first-child {
    display: none;
  }
  button {
    width: auto;
    margin-left: 0;
    margin-top: 4px;
  }
  input {
    background: ${({ theme }) => theme && theme.Colors.grays[9]};
  }
`;
export const FirstMessage = styled.div`
  width: 100%;
  padding-left: 56px;
  margin-bottom: 5px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;

export const SecondMessage = styled.div`
  margin-top: 18px;
  padding-left: 58px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;

export const StyledRestrictions = styled.div`
  width: 196px;
  height: 37px;
  display: table-footer-group;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > div {
    margin-left: 58px;
    & > div {
      top: 3px;
    }
  }
  & > span {
    line-height: 14px;
    padding-left: 79px;
  }
`;

export const StyleErrors = styled.p`
  margin: 1px;
  color: ${({ theme }) => theme.Colors.orange[1]};
  font-size: ${({ theme }) => theme.fontSize[10]};
  padding-left: 14px;
  padding-top: 2px;
`;
