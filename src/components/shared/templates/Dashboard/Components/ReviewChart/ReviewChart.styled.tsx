import styled from 'styled-components';

export const StyledReviewChart = styled.section`
  width: 548px;
  height: 401px;
  border-radius: 10px;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;
export const StyledLabel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 17px;
  }
`;
export const StyledReviewChatsHeader = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  padding-left: 28px;
  position: relative;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin-bottom: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
  }
  & > :nth-child(2) {
    & > button {
      margin-right: 23px;
      // cursor: pointer;
      & > div {
        & > div {
          & * {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[6]};
              }
            }
          }
        }
      }
      &:disabled {
        cursor: not-allowed;
      }
      & > div {
        height: 33px;
        border-radius: 16px;
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        & span {
          color: ${({ theme }) => theme.Colors.grays[3]};
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
          margin-right: 3px;
        }
        & > :first-child {
          & > div {
            padding-top: 2px;
            padding-left: 4px;
            & > div {
              & > svg {
                width: 15px;
                height: 17px;
                & > :first-child {
                  & > path {
                    fill: ${({ theme }) => theme.Colors.grays[6]};
                  }
                }
              }
            }
          }
        }
        & > :last-child {
          & > div {
            width: 10px;
            margin-left: 6px;
            margin-top: 1px;
            & > div {
              & > svg {
                width: 8px;
                height: 6px;
                cursor: pointer;
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[3]};
                }
              }
            }
          }
        }
      }
    }
    & > div {
      z-index: 1;
      display: flex;
      position: relative;
      right: 20px;
      top: 4px;
    }
  }
`;
export const StyledChart = styled.div`
  width: 550px;
  height: 258px;
  & > div {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 6px;
  }
`;
