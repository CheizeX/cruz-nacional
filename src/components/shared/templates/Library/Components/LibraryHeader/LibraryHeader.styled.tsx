import styled from 'styled-components';

export const StyledLibraryHeader = styled.div`
  display: flex;
  width: 100%;
  max-height: 56px;
  height: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: start;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > :nth-child(1) {
    display: flex;
    justify-content: end;
    & > span {
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      line-height: 17px;
      width: fit-content;
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    & > div {
      border-radius: 50%;
      min-width: 20px;
      min-height: 20px;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      width: max-content;
      padding: 3px;
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 4px;
    }
  }
  & > :nth-child(2) {
    display: flex;
    width: 584px;
    & > :nth-child(1) {
      width: 296px;
      & > input {
        width: 228px;
      }
      & > button:first-child {
        display: none;
      }
      & > button:last-child {
        padding: 0;
        & > div {
          & * {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[8]};
              }
            }
          }
        }
      }
    }
    & > :nth-child(2) {
      display: flex;
      align-items: center;
      height: 40px;
      & > div {
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        margin-left: 16px;
        width: 100px;
        height: 32px;
        border-radius: 20px;
        display: flex;
        justify-content: start;
        align-items: center;
        & > span {
          width: fit-content;
          color: ${({ theme }) => theme.Colors.grays[3]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          line-height: 14px;
        }
        & > div {
          width: 12px;
          display: flex;
          justify-content: end;
          & * {
            width: 100%;
            height: 100%;
            align-items: center;
            display: flex;
            justify-content: flex-end;
            & > svg {
              width: 8px;
              height: 6px;
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[3]};
              }
            }
          }
        }
      }
    }
    & > :nth-child(3) {
      border-left: 1px solid ${({ theme }) => theme.Colors.grays[8]};
      width: 156px;
      display: flex;
      max-height: 34px;
      margin-left: 16px;
      align-items: center;
      justify-content: end;
      & > button {
        background-color: ${({ theme }) => theme.Colors.grays[5]};
        min-width: 140px;
        max-width: 140px;
        & > span {
          color: ${({ theme }) => theme.Colors.grays[10]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          line-height: 14px;
          display: flex;
          width: 100%;
          min-width: 94px;
        }
      }
    }
  }
`;
