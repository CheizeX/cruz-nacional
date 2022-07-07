import styled from 'styled-components';
import { IContainerBox } from './PredefinedMessage.interface';

export const WrapperPedefinedMessage = styled.div`
  display: flex;
`;
export const ContainerMessage = styled.div<IContainerBox>`
  visibility: ${({ showPredefinedTexts }) =>
    showPredefinedTexts ? 'visible' : 'hidden'};
  width: 362px;
  position: absolute;
  height: max-content;
  bottom: 60px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 460px;
  & > div {
    width: 100%;
    height: 100%;
    & > button {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-height: 30px;
      border-radius: 5px;
      padding-left: 5px;
      padding: 8px;
      justify-content: space-between;
      & > span {
        margin-left: 5px;
        line-height: 12px;
        text-align: initial;
      }
      &:hover {
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        cursor: pointer;
        & > span {
          color: ${({ theme }) => theme.Colors.purples[2]};
        }
      }
      & > div {
        height: fit-content;
        padding-right: 30px;
        & div {
          display: flex;
          justify-content: center;
          align-items: center;
          & * {
            fill: ${({ theme }) => theme.Colors.grays[9]};
          }
          & svg {
            background-color: ${({ theme }) => theme.Colors.grays[6]};
            height: 20px;
            width: 20px;
            padding: 2px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
export const StyledBoxContainer = styled.div<IContainerBox>`
  position: relative;
  height: 100%;
  top: 0;
  & > div {
    visibility: ${({ showPredefinedTexts }) =>
      showPredefinedTexts ? 'visible' : 'hidden'};
    position: absolute;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.Colors.grays[8]};
    left: calc(100% + 20px);
    top: -128px;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 10px;
    width: max-content;
    height: fit-content;
    min-height: 30px;
    padding: 0 4px;
    border: 10px solid transparent;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    & > div {
      & > button {
        display: flex;
        border-radius: 5px;
        width: 100%;
        justify-content: space-between;
        min-height: 30px;
        padding-left: 5px;
        text-align: center;
        display: flex;
        min-height: 30px;
        align-items: center;
        &:hover {
          background-color: ${({ theme }) => theme.Colors.grays[9]};
          cursor: pointer;
          & > span {
            color: ${({ theme }) => theme.Colors.purples[2]};
          }
          & svg {
            background-color: ${({ theme }) => theme.Colors.purples[2]};
          }
        }
        & > span {
          margin-left: 5px;
          line-height: 12px;
          text-align: initial;
        }
      }
    }
  }
`;
