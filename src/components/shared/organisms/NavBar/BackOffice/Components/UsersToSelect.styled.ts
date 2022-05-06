import styled from 'styled-components';

export const StyledUsersToSelectContainer = styled.div`
  width: 500px;
  height: fit-content;
  /* max-height: 500px; */
  min-height: 200px;
  background: ${({ theme }) => theme && theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 0 16px;
`;
export const StyledUsersToSelectHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme && theme.Colors.grays[9]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    color: ${({ theme }) => theme && theme.Colors.grays[1]};
    padding-left: 10px;
  }
  & > button {
    padding-right: 10px;
    & > div {
      height: 16px;
    }
    & :hover {
      cursor: pointer;
      & > div {
        height: 16px;
        & * {
          fill: ${({ theme }) => theme && theme.Colors.grays[5]};
        }
      }
    }
  }
`;
export const StyledUsersToSelectBody = styled.div`
  & > :first-child {
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
    grid-auto-rows: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.Colors.grays[1]};
    margin: 10px;
    & > span {
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    & > :nth-child(2) {
      margin-left: 30px;
    }
    & > :last-child {
      margin-left: 30px;
    }
  }
  & > section {
    border-radius: 10px;
    height: 100%;
    max-height: 310px;
    overflow: scroll;
    & ::-webkit-scrollbar {
      display: none;
    }
    & > :nth-child(2n) {
      border-radius: 10px;
      background: ${({ theme }) => theme.Colors.grays[10]};
    }
    & > div {
      width: 100%;
      background: ${({ theme }) => theme.Colors.grays[9]};
      border-radius: 10px;
      height: 56px;
      display: grid;
      grid-template-columns: 1fr 1fr 0.35fr;
      font-size: 12px;
      font-weight: 600;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div:nth-child(1) {
        border-radius: 27px;
        background: ${({ theme }) => theme.Colors.green[1]};
        height: 35px;
        width: 140px;
        align-self: center;
        justify-self: center;
        font-size: 10px;
        font-weight: bold;
        color: ${({ theme }) => theme.Colors.grays[10]};
      }
      & > :last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
          outline: 1px solid ${({ theme }) => theme.Colors.grays[8]};
          margin-right: 10px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
export const StyledUsersToSelectFooterSaveChanges = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > button {
    height: 45px;
    min-width: 200px;
  }
`;
export const StyledWarning = styled.div`
  background-color: ${({ theme }) => theme.Colors.purples[2]};
  color: white;
  font-size: 12px;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 0;
  text-align: left;
  line-height: 1.5;
  font-weight: 600;
`;
