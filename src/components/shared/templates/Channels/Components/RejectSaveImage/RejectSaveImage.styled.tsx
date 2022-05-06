import styled from 'styled-components';

export const StyledRejectSaveImage = styled.div`
  height: 100%;
  & > :first-child {
    margin-top: 30px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    & > div {
      & * {
        & > svg {
          width: 60px;
          height: 60px;
          & > path {
            fill: ${({ theme }) => theme.Colors.orange[3]};
          }
        }
      }
    }
  }
  & > :nth-child(2) {
    height: 120px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 322px;
    margin: auto;
    & > :nth-child(1) {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 14px;
      text-align: center;
      width: 100%;
    }

    & > :nth-child(2) {
      margin-top: 10px;
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      width: 100%;
      text-align: center;
      margin: 10px 0 0 auto;
    }
    & > :nth-child(4) {
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      width: 100%;
      text-align: center;
    }
  }
  & > :nth-child(3) {
    display: flex;
    justify-content: center;
    height: 80px;
    align-items: end;
  }
`;
