import styled from 'styled-components';

export const StyledLoginPassword = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 411px;
  height: 490px;
  border-radius: 20px;
  margin-top: 27px;
  margin-bottom: 27px;
  button {
    width: 340px;
    margin-left: 36px;
    margin-top: 23px;
  }
`;

export const StyledTitle = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 23px;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledAvatar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-bottom: 31px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 77px;
    height: 75px;
    & :last-child {
      position: absolute;
      left: 215px;
      top: 0px;
      font-size: 24px;
      width: 30px;
      height: 30px;
    }
  }
`;

export const StyledInput = styled.div`
  width: 340px;
  height: 40px;
  margin-left: 36px;
  margin-bottom: 20px;
  & > div {
    background: ${({ theme }) => theme && theme.Colors.grays[9]};
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
  margin-top: 10px;
`;

export const StyledRestrictions = styled.div`
  width: 196px;
  height: 37px;
  display: table-footer-group;
  & > :first-child {
    padding-left: 60px;
  }
  & > div {
    margin-top: 5px;
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
