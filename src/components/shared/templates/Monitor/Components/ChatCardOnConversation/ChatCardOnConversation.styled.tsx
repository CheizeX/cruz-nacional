import styled from 'styled-components';

export const StyledCardOnCoversation = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.Colors.green[1]};
  height: 71px;
  width: 190px;
  margin: 24px 8px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: initial;
  & > :nth-child(1) {
    background-color: green;
    width: 100px;
    display: flex;
    flex-direction: column;
    border-end-start-radius: 10px;
    border-start-start-radius: 10px;
    padding-left: 10px;
    & > :nth-child(1) {
      display: flex;
      font-size: ${({ theme }) => theme.fontSize[32]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
    }
    & > :nth-child(2) {
      margin-top: 5px;
      font-size: 0.75rem;
      line-height: 14px;
    }
  }
  & > :nth-child(2) {
    background-color: pink;
    width: 90px;
    display: flex;
    flex-direction: column;
    border-start-end-radius: 10px;
    border-end-end-radius: 10px;
    padding-left: 10px;
    & > :nth-child(1) {
      display: flex;
      font-size: ${({ theme }) => theme.fontSize[32]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      margin-bottom: 22px;
      & > div {
        & > * {
          & > svg {
              & > path {
                fill: #fff;
            }
          }
        }
      }
}
    }
    & > :nth-child(2) {
      font-size: 0.75rem;
      line-height: 14px;
    }
  }
  /* & > :nth-child(1) {
    & > :first-child {
      font-size: ${({ theme }) => theme.fontSize[32]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
    }
    & > :nth-child(2) {
      margin-top: 5px;
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
    }
    & > div {
      right: 12px;
      top: 2px;
      position: absolute;
      width: 37px;
      height: 32px;
      & * {
        width: 37px;
        height: 32px;
        font-size: ${({ theme }) => theme.fontSize[12]};
        font-weight: ${({ theme }) => theme.fontWeight[700]};
      }
    }
  } */
`;
