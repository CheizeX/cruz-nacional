import styled from 'styled-components';

export const StyledOnboardingExpired = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 411px;
  height: 248px;
  border-radius: 20px;
  padding: 29px 29px 32px 29px;
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
      & > div {
        & > svg {
          width: 35px;
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
  margin-bottom: 17px;
  margin-left: 18px;
  & span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[16]};
  }
`;

export const StyledInformation = styled.div`
  width: 310px;
  height: 34px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 19px;
  margin-left: 25px;
  & span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: 17px;
  }
`;
