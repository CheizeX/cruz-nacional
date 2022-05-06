import styled from 'styled-components';

export const StyledWrapperUnOfficialWhatsappNotExist = styled.div`
  width: 304px;
  height: 100%;
  max-height: 418px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin-top: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    border-radius: 10px;
    min-height: 320px;
    width: 300px;
    margin: 10px auto;
    padding: 20px;
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      border-radius: 10px;
      min-height: 250px;
      height: 312px;
      text-align: start;
      padding: 14px 12px;
      & > :first-child {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
      & > :last-child {
        height: 54px;
        display: flex;
        align-items: end;
        & > div {
          height: 24px;
        }
        & > span {
          min-width: 186px;
          width: 100%;
          margin-left: 8px;
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
          color: ${({ theme }) => theme.Colors.grays[1]};
        }
      }
      & > span {
        width: 100%;
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 16px;
        display: flex;
        text-align: justify;
      }
    }
  }
`;
