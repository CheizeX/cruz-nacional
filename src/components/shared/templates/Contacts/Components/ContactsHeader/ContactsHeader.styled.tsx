import styled from 'styled-components';

export const StyledWrapperContatsHeader = styled.div`
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
    & > span {
      display: flex;
      min-width: 200px;
      justify-content: end;
      border-left: 1px solid ${({ theme }) => theme.Colors.grays[9]};
      display: flex;
      margin-left: 20px;
      max-height: 34px;
      align-items: center;
    }
    & > :nth-child(1) {
      & > button {
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
        & > div {
          background-color: ${({ theme }) => theme.Colors.grays[9]};
          & > span {
            width: 100%;
            color: ${({ theme }) => theme.Colors.grays[3]};
            font-size: ${({ theme }) => theme.fontSize[12]};
            font-weight: ${({ theme }) => theme.fontWeight[600]};
            line-height: 14px;
          }
        } 
      }
      & > :nth-child(4) {
        border-left: 1px solid ${({ theme }) => theme.Colors.grays[8]};
        & > button {
          background-color: ${({ theme }) => theme.Colors.grays[5]};
          width: 140px;
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
  }
`;
