import styled from 'styled-components';

export const StyledTransferConfirmation = styled.div`
  width: 360px;
  height: 280px;
  background-color: ${({ theme }) => theme && theme.Colors.grays[10]};
  border-radius: 10px;
  padding-top: 36px;
  padding-bottom: 16px;
`;
export const StyledIconTransferConfirmation = styled.div`
  width: 41px;
  height: 41px;
  margin: auto;
  & > div {
    & > div {
      & > div {
        & > svg {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;
export const StyledInformationTransferConfirmation = styled.div`
  align-items: center;
  width: 318px;
  height: fit-content;
  margin: auto;
  padding-top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  & span {
    width: 310px;
    height: 30px;
    color: ${({ theme }) => theme.Colors.grays[6]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    margin-bottom: 31px;
  }
  & > :first-child {
    width: 318px;
    height: 42px;
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[16]};
    line-height: 19px;
    margin-bottom: 16px;
  }
`;

export const StyledFooterTransferConfirmation = styled.div`
  width: 360px;
  height: 55px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  button:first-child {
    width: 120px;
  }
`;
