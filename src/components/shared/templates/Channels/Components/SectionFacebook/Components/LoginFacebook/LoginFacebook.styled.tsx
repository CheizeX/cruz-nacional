import styled from 'styled-components';

export const StyledLoginFacebook = styled.div`
  & > :nth-child(1) {
    height: 222px;
    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 12px;
      & > :nth-child(1) {
        color: ${({ theme }) => theme.Colors.grays[1]};
        font-size: ${({ theme }) => theme.fontSize[14]};
      }
      & > :nth-child(2) {
        color: ${({ theme }) => theme.Colors.grays[1]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        margin-top: 12px;
      }
    }
    & > :nth-child(2) {
      width: 158px;
      height: 108px;
      margin: auto;
    }
  }
`;

export const StyledMessengerFooter = styled.div`
  display: flex;
  height: 3.3rem;
  align-items: flex-end;
  padding: 0 0.9375rem;
  justify-content: space-between;
`;

export const StyledButtonFacebook = styled.button`
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 2.5rem;
  border-radius: 0.3125rem;
  background-color: #1977f2;
  padding-left: 10px;
  display: flex;
  margin: 0 auto;
  :hover {
    cursor: pointer;
  }
  & > :nth-child(1) {
    height: 1.875rem;
    margin-right: 1.25rem;
    & > div {
      & * {
        & > svg {
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
          }
        }
      }
    }
  }
  & > :nth-child(2) {
    color: ${({ theme }) => theme.Colors.grays[10]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 14px;
  }
`;
