import styled from 'styled-components';

export const StyledChangePasswordRequestWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  height: 342px;
  justify-content: space-around;
  margin: 30px 0;
  width: 100%;

  & > form {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 130px;
    position: relative;
    text-align: center;
    width: 340px;
    & > span {
      align-self: start;
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[400]};
      justify-content: left;
      margin-bottom: -25px;
      margin-top: -5px;
      padding-left: 10px;
    }

    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      position: relative;
      top: 30px;
      & > button {
        display: none;
      }
      & > input {
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        width: 330px;
      }
    }

    & p {
      align-self: start;
      color: red;
      font-size: 10px;
      left: 15px;
      position: absolute;
      top: 65px;
    }

    & button {
      top: 50px;
      width: 340px;
    }
  }
`;

export const StyledHeader = styled.div`
  & > button {
    align-items: flex-start;
    display: flex;
    fill: ${({ theme }) => theme.Colors.purples[1]};
    flex-direction: row;
    height: 20px;
    justify-content: flex-start;
    width: 340px;
    & span {
      color: ${({ theme }) => theme.Colors.purples[1]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      margin-left: 7px;
    }
    & svg {
      height: 17px;
      margin-top: 1px;
      transition: all.2s;
      width: 20px;
      & * {
        fill: ${({ theme }) => theme.Colors.purples[1]};
      }
      & :hover {
        cursor: pointer;
        transform: translateX(-1px);
      }
    }
  }
`;

export const StyledInformation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 72px;
  justify-content: space-between;
  text-align: center;
  width: 340px;
  & span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 16px;
  }
  & > :first-child {
    font-size: ${({ theme }) => theme.fontSize[18]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
`;
