import styled from 'styled-components';

export const StyledWrapperOfficialWhatsappRejected = styled.div`
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
            fill: ${({ theme }) => theme.Colors.orange[2]};
          }
        }
      }
    }
  }
  & > :last-child {
    height: 120px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 322px;
    margin: auto;
    & > :nth-child(1) {
      color: ${({ theme }) => theme.Colors.grays[1]};
      text-align: center;
      width: 100%;
    }

    & > :nth-child(2) {
      margin-top: 20px;
      color: ${({ theme }) => theme.Colors.grays[3]};
      width: 100%;
      text-align: center;
      margin: 0 auto;
      padding: 0 32px;
    }
  }
`;
