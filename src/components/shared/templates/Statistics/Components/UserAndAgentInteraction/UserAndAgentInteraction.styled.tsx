import styled from 'styled-components';

export const StyledWrapperIteractionUser = styled.div`
  width: 505px;
  height: 350px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & > :nth-child(2) {
    max-height: 268px;
  }
  & > :nth-child(3) {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 100%;
    & > button {
      height: 20px;
      cursor: pointer;
      // width: 100%;
      & > div {
        & * {
          & > svg {
            width: 8px;
            height: 10px;
          }
        }
      }
    }
  }
`;
export const StyledHeaderInteractionUser = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  height: 55px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  & > :first-child {
    display: flex;
    width: 200px;
    justify-content: space-between;
    & > div {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      min-width: 24px;
      min-height: 24px;
      width: fit-content;
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]}:;
    }
  }
  & > :nth-child(2) {
    margin-right: 6px;
    & > button {
      :disabled {
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
      & > div {
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        height: 33px;
        border-radius: 16px;
      }
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
  }
`;
