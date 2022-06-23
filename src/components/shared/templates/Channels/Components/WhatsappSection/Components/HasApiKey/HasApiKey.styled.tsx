import styled from 'styled-components';

export const WrapperHasApiKey = styled.div`
  width: 304px;
  height: 100%;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    border-radius: 10px;
    min-height: 240px;
    width: 300px;
    margin: 10px auto;
    padding: 20px;
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      border-radius: 10px;
      height: 250px;
      padding: 30px 10px;
      & > a {
        display: flex;
        margin-left: 2px;
        height: 30px;
        & > span {
          margin-left: 14px;
          margin-bottom: 5px;
          color: ${({ theme }) => theme.Colors.grays[1]};
          font-weight: ${({ theme }) => theme.fontWeight[500]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
          display: flex;
          align-items: center;
          text-align: start;
        }
        & > div {
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
          & > div {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.Colors.grays[8]};
          }
        }
      }
      & > button {
        cursor: pointer;
        display: flex;
        min-height: 30px;
        height: 40px;
        align-items: center;
        justify-content: center;

        & > div {
          top: -8px;
        }
        & > span {
          margin-left: 14px;
          margin-bottom: 5px;
          color: ${({ theme }) => theme.Colors.grays[1]};
          font-weight: ${({ theme }) => theme.fontWeight[500]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
          display: flex;
          align-items: center;
          text-align: start;
        }
      }
      & > div {
        justify-content: flex-end;
        display: flex;
        flex-direction: column;
        height: 120px;
        & > span {
          color: ${({ theme }) => theme.Colors.grays[1]};
          font-weight: ${({ theme }) => theme.fontWeight[500]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
        }
      }
    }
  }
`;
