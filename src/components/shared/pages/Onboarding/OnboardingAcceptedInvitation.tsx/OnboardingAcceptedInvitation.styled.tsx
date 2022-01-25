import styled from 'styled-components';

export const StyledOnboardingAccepted = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 411px;
  height: 304px;
  border-radius: 20px;
  padding: 36px;
  & > button {
    width: 340px;
    margin-bottom: 42px;
  }
`;

export const StyledIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  & > div {
    & > div {
      position: relative;
      display: flex;
      margin-left: 10px;
      & > div {
        & > svg {
          width: 50px;
          height: 40px;
        }
      }
    }
  }
`;

export const StyledHeader = styled.div`
  width: 318px;
  height: 42px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-left: 10px;
  & span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[16]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
`;

export const StyledInformation = styled.div`
  width: 310px;
  height: 51px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 30px;
  margin-left: 17px;
  & span {
    color: ${({ theme }) => theme.Colors.grays[5]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: 17px;
  }
`;
