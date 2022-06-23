import styled from 'styled-components';

export const WrapperCustomSound = styled.div`
  width: 16.2rem;
  height: fit-content;
  margin: auto;
  padding: 14px 0;
  margin-top: 0.6rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > div {
    width: 100%;
    display: flex;
    height: 2.5rem;
    align-items: center;
    //max-width: 146px;
    justify-content: space-between;
    padding: 0 12px;
    min-height: 280px;
    flex-direction: column;
    & > span {
      display: flex;
      height: 46px;
      align-items: center;
      width: 100%;
      text-align: start;
      align-items: center;
      justify-content: flex-start;
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      line-height: 14px;
      & > span {
        min-width: 190px;
      }
    }
    & > div {
      overflow: scroll;
      max-height: 230px;
      width: 100%;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      &::-webkit-scrollbar {
        display: none;
      }
      & > div {
        & > button {
          cursor: pointer;
          display: flex;
          height: 100%;
          min-height: 34px;
          & > :first-child {
            display: flex;
            margin-top: -3px;
          }
          & > span {
            color: ${({ theme }) => theme.Colors.grays[1]};
            font-size: ${({ theme }) => theme.fontSize[12]};
            font-weight: ${({ theme }) => theme.fontWeight[600]};
            display: flex;
            align-items: center;
            text-align: center;
            height: 100%;
            min-height: 32px;
            padding-left: 10px;
          }
        }
        & > div {
          display: flex;
          justify-content: space-between;
          width: 100%;
          & > button:first-child {
            cursor: pointer;
            display: flex;
            height: 100%;
            min-height: 34px;
            & > :first-child {
              display: flex;
              margin-top: -4px;
            }
            & > span {
              color: ${({ theme }) => theme.Colors.grays[1]};
              font-size: ${({ theme }) => theme.fontSize[12]};
              font-weight: ${({ theme }) => theme.fontWeight[600]};
              display: flex;
              align-items: center;
              text-align: center;
              height: 100%;
              min-height: 32px;
              padding-left: 10px;
            }
          }
          & > button:last-child {
            cursor: pointer;
            & > svg {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
            :hover {
              & > svg {
                fill: ${({ theme }) => theme.Colors.grays[4]};
              }
            }
          }
        }
      }
    }
  }
`;
