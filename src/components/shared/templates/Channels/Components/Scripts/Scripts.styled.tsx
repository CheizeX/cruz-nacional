import styled from 'styled-components';

export const StyledScriptVisualizatorContainer = styled.main`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledScriptVisualizator = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 320px;
  height: 500px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  & > span {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: ${({ theme }) => theme.Colors.purples[1]};
    font-size: ${({ theme }) => theme.fontSize[16]};
  }
`;
export const StyledScriptVisualizatorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  min-height: 60px;
  width: 100%;
  & > span {
    font-size: 16px;
    padding-left: 10px;
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > button {
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[7]};
    }
    &:hover {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const StyledScriptVisualizatorBody = styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize[12]};
    border: 2px dashed ${({ theme }) => theme.Colors.green[2]};
    padding: 10px;
    border-radius: 10px;
    margin: 30px 0;
    line-height: 1.5;
    min-height: 90px;
    height: 90px;
    & > :first-child {
      top: -15px;
      left: 4.1px;
      height: 25px;
      width: 32px;
      position: absolute;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    & > :nth-child(2) {
      top: -15px;
      right: 5.5px;
      height: 20px;
      width: 32px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[3]};
      position: absolute;

      &:hover {
        cursor: pointer;
        & path {
          fill: ${({ theme }) => theme.Colors.green[2]};
        }
      }
      & path {
        fill: ${({ theme }) => theme.Colors.green[1]};
      }
    }
    & > p {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
`;
