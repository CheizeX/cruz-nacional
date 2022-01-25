import styled from 'styled-components';

export const StyledWrapperSectionMonitor = styled.div`
  width: 344px;
  height: 656px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & > :nth-child(3) {
    width: 296px;
    height: 40px;
    margin: auto;
    & > button:first-child {
      display: none;
    }
    & > button:last-child {
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[7]};
            }
          }
        }
      }
    }
  }
`;
export const StyledHeaderFirstSection = styled.div`
  width: 344px;
  height: 55px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: space-between;
  & > span {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 23px;
    div {
      line-height: 14px;
      margin-left: 10px;
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: 700;
      font-size: 12px;
      padding: 4px 5px;
      width: 24px;
      height: 20px;
      position: relative;
      top: 1px;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      border-radius: 50%;
    }
  }
  & > button {
    margin-top: 20px;
    margin-right: 8px;
    & :hover {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
    & :active {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[6]};
      }
    }
  }
  & > :nth-child(3) {
    z-index: 1;
  }
`;
export const WrapperFirtSectionCard = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 14px;
  & > :nth-child(1) {
    width: 144px;
    height: 72px;
    margin: 24px 0;
    & > div {
      width: 30px;
      height: 28px;
      top: 10px;
      right: 8px;
      & > div {
        & * {
          & > svg {
            width: 28px;
            height: 28px;
            & > path {
              fill: white;
              opacity: 0.3;
            }
          }
        }
      }
    }
    & > :nth-child(1) {
      font-size: 30px;
      padding-top: 4px;
    }
    & > :nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
  & > :nth-child(2) {
    width: 144px;
    height: 72px;
    margin: 24px 0;
    & > div {
      width: 30px;
      height: 28px;
      top: 10px;
      right: 8px;
      & > div {
        & * {
          & > svg {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
    & > :nth-child(1) {
      font-size: 30px;
      padding-top: 4px;
    }
    & > :nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
`;
export const StyledAgentActive = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.Colors.green[4]};
  border: 2px solid ${({ theme }) => theme.Colors.grays[10]};
`;

export const WrapperSecondSectionAgent = styled.div`
  width: 304px;
  height: 408px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  margin: 16px auto;
  padding: 12px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div {
    width: 281px;
    height: 121px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    margin-bottom: 8px;
    padding: 16px 20px;
    & img {
      border-radius: 50%;
      object-fit: cover;
      max-width: 42px;
      max-height: 42px;
    }
    & > :nth-child(1) {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      & > :nth-child(1) {
        width: 50px;
        height: 50px;
        & > div {
          & * {
            & > svg {
              width: 52px;
              height: 52px;
            }
          }
        }
      }
      & > :nth-child(2) {
        display: flex;
        flex-direction: column;
        width: 130px;
        justify-content: flex-end;
        margin-left: 17px;
        margin-bottom: 4px;
        padding: 0;
        & > :nth-child(1) {
          position: relative;
          right: 28px;
          top: 32px;
        }
        & > :nth-child(2) {
          color: ${({ theme }) => theme.Colors.grays[3]};
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          font-size: ${({ theme }) => theme.fontSize[14]};
          line-height: 17px;
          width: 100%;
        }
        & > :nth-child(3) {
          color: ${({ theme }) => theme.Colors.grays[3]};
          font-weight: ${({ theme }) => theme.fontWeight[400]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
        }
      }
    }
    & > :nth-child(2) {
      display: flex;
      margin-top: 14px;
      justify-content: space-between;
      & > div:first-child {
        display: flex;
        justify-content: space-evenly;
        width: 136px;
        & > div {
          width: 40px;
          padding: 5.5px 7px;
          & > span {
            margin-right: 1px;
          }
        }
        & > :nth-child(2) {
          & > div {
            & * {
              & > svg {
                width: 13px;
                height: 13px;
                & > path {
                  fill: white;
                }
              }
            }
          }
        }
      }
      & > :last-child {
        & > span {
          color: ${({ theme }) => theme.Colors.grays[10]};
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
        }
      }
    }
  }
`;
export const StyledActive = styled.div`
  width: 15px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.Colors.green[4]};
  margin-right: -17px;
  padding: 0;
`;
