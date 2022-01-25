import styled from 'styled-components';

export const StyledChannelEmpty = styled.div`
  width: 61.5rem;
  height: 34rem;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  margin: 20px auto;
  & > div {
    padding: 8.8rem;
    & > :first-child {
      width: 12rem;
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      & > :nth-child(2) {
        min-width: 84px;
        min-height: 84px;
        & > img {
          max-width: 84px;
          max-height: 84px;
          transform: rotate(90deg);
        }
      }

      & > :first-child {
        display: flex;
        & > div {
          width: 2.2rem;
          height: 2.2rem;
        }
        & * {
          & > svg {
            width: 2.2rem;
            height: 2.2rem;
          }
        }
        & > :nth-child(1) {
          display: flex;
          top: 78px;
          right: 15px;
        }
        & > :nth-child(2) {
          display: flex;
          top: 20px;
          right: 30px;
        }
        & > :nth-child(3) {
          display: flex;
          top: -14px;
          right: 0px;
        }
        & > :nth-child(4) {
          display: flex;
          top: 20px;
          left: 30px;
        }
        & > :nth-child(5) {
          display: flex;
          top: 78px;
          left: 15px;
        }
      }
      /* & > :nth-child(2) {
        & > div {
          width: 3.5rem;
          height: 3.5rem;
          margin: 1.1rem 0 1rem 0;
          & * {
            & > svg {
              width: 3.5rem;
              height: 3.5rem;
              & > path {
                fill: ${({ theme }) => theme.Colors.purples[3]};
              }
            }
          }
        }
      } */
    }

    & > :nth-child(2) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      & > :nth-child(1) {
        color: ${({ theme }) => theme.Colors.grays[6]};
        font-size: ${({ theme }) => theme.fontSize[18]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        line-height: 1.3rem;
        margin-bottom: 0.4rem;
      }
      & > :nth-child(2) {
        color: ${({ theme }) => theme.Colors.grays[6]};
        font-size: ${({ theme }) => theme.fontSize[14]};
        font-weight: ${({ theme }) => theme.fontWeight[500]};
        line-height: 1rem;
        width: 27rem;
        text-align: center;
      }
      margin-bottom: 1.8rem;
    }
    & > :nth-child(3) {
      margin: auto;
    }
  }
`;
