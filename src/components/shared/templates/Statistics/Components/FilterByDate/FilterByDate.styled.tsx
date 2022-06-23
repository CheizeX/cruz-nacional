import styled from 'styled-components';

export const DropdownFilterByDate = styled.div`
  position: relative;
  & > button {
    //position: relative;
    cursor: pointer;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      height: 33px;
      border-radius: 16px;
      & > span {
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
      & > :first-child {
        & * {
          display: flex;
          justify-content: center;
          align-items: center;
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
          }
        }
      }
      & > :last-child {
        width: 20px;
        & * {
          width: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > svg {
            width: 8px;
            height: 8px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[3]};
            }
          }
        }
      }
    }
  }
  & > div {
    width: 215px;
    height: 260px;
    position: absolute;
    right: 0;
    top: 40px;
  }
`;
export const WrapperFilterByDate = styled.div`
  width: 215px;
  height: 260px;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  box-shadow: 0px 0px 7px 0px #0000004a;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & > :first-child {
    height: 42px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    & > span {
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      line-height: 17px;
      color: ${({ theme }) => theme.Colors.grays[1]};
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 20px;
    }
  }
  & > :last-child {
    padding: 8px 0;
    & > button {
      cursor: pointer;
      min-width: 150px;
      padding: 0 10px;
      width: 100%;
      display: flex;
      align-items: center;
      min-height: 32px;
      & > div {
        margin-right: 14px;
        top: -5px;
      }
      & > span {
        font-size: ${({ theme }) => theme.fontSize[12]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        line-height: 17px;
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
    }
  }
`;

export const StyledHeaderCustomRange = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  height: 43px;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  & > span {
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 20px;
    }
  }
  & button {
    height: 13px;
    width: 13px;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledWrapperCustomRange = styled.div`
  background-color: ${({ theme }) => theme && theme.Colors.grays[10]};
  border-radius: 10px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.29);
  height: 320px;
  width: 542px;
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const StyledBodyCustomRange = styled.div`
  height: 220px;
  & div {
    margin: 0 auto;
    margin-bottom: -5px;
    & div {
      & div {
        margin: 0;
        & div {
          height: 26px;
        }
        & button {
          height: 26px;
          padding: 0 3px;
          width: 32px;
          & div {
            & span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
export const StyledFooterCustomRange = styled.div`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  height: 56px;
  justify-content: space-between;
  margin: 0;
  padding: 0 24px;
  button:first-child {
    width: 120px;
  }
  button:last-child {
    width: 120px;
  }
`;
