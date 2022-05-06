import styled from 'styled-components';
import { IPropsScriptsWrapper } from './ScriptBuilder.interface';

export const StyledScriptWrapper = styled.div<IPropsScriptsWrapper>`
  width: fit-content;
  max-width: 1140px;
  height: 400px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 0;
  & > span {
    font-size: ${({ theme }) => theme.fontSize[14]};
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
    min-height: 40px;
  }
  & > :nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize[16]};
    display: flex;
    text-align: center;
    width: 100%;
    margin-top: 14px;
    justify-content: center;
    min-height: 40px;
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > :nth-child(3) {
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    color: ${({ theme, isCreated }) =>
      isCreated ? theme.Colors.grays[5] : theme.Colors.purples[3]};
    width: 100%;
    max-width: ${({ isCreated }) => (isCreated ? '542px' : '100%')};
    margin: 0 20px;
    justify-content: ${({ isCreated }) => (isCreated ? 'center' : 'start')};
    padding: 0 10px;
  }
`;
export const StyledPayload = styled.div`
  width: 100%;
  padding: 0 20px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > :last-child {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    width: 100%;
    height: 100%;
    max-width: 310px;
    max-height: 190px;
    align-items: center;
    display: flex;
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
    padding-left: 16px;
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > button {
    width: 50px;
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

export const StyledWrapperBodyScripts = styled.div`
  margin-right: 10px;
  width: fit-content;
  & > div {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize[12]};
    border: 2px dashed ${({ theme }) => theme.Colors.green[2]};
    padding: 8px;
    border-radius: 10px;
    margin: 18px 0;
    line-height: 1.5;
    min-height: 40px;
    height: 44px;
    & > svg:first-child {
      top: -15px;
      left: 5.5px;
      height: 20px;
      width: 32px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.purples[1]};
      position: absolute;
    }
    & > :nth-child(2) {
      top: -15px;
      right: 5.5px;
      height: 20px;
      width: 32px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[1]};
      position: absolute;

      &:hover {
        cursor: pointer;
        & path {
          fill: ${({ theme }) => theme.Colors.purples[1]};
        }
      }
      & path {
        fill: ${({ theme }) => theme.Colors.purples[2]};
      }
    }
    & > p {
      display: flex;
      align-items: center;
      text-align: initial;
      height: 100%;
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
  & > :first-child {
    height: 60px;
    min-height: 60px;
  }
  /* height: 100%;
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
  } */
`;
