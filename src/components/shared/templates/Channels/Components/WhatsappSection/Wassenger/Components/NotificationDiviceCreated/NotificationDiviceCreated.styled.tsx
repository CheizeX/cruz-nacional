import styled from 'styled-components';
import { IContainerNotification } from './NotificationDiviceCreated.interface';

export const StyledWrapperNotification = styled.div<IContainerNotification>`
  width: ${({ isMinimized }) => (isMinimized ? '200px' : '320px')};
  height: ${({ isMinimized }) => (isMinimized ? '80px' : '160px')};
  background-color: ${({ theme, diviceStatus }) =>
    diviceStatus ? theme.Colors.green[4] : theme.Colors.grays[10]};
  border-radius: 10px;
  position: absolute;
  right: 34px;
  bottom: ${({ isMinimized }) => (isMinimized ? '-36px' : 'none')};
  z-index: 2;
  box-shadow: 0px 0px 7px 0px #0000004a;
  padding: 12px 6px;
  & > span {
    color: ${({ theme, diviceStatus }) =>
      diviceStatus ? theme.Colors.grays[10] : theme.Colors.grays[3]};
    font-size: ${({ theme, diviceStatus }) =>
      diviceStatus ? theme.fontSize[12] : theme.fontSize[14]};
    font-weight: ${({ theme, diviceStatus }) =>
      diviceStatus ? theme.fontWeight[500] : theme.fontWeight[600]};
    display: flex;
    text-align: center;
  }
  & > button {
    margin: 20px auto;
  }
  & > :first-child {
    width: 100%;
    display: flex;
    justify-content: ${({ isMinimized }) =>
      !isMinimized ? 'flex-end' : 'space-between'};
    padding: 0 10px;
    & > button {
      cursor: pointer;

      & > svg {
        stroke: ${({ theme }) => theme.Colors.grays[10]};
        width: 20px;
        height: 20px;
      }
      & > div {
        width: 20px;
        height: 20px;
        & * {
          & > svg {
            & > path {
              fill: ${({ theme, diviceStatus }) =>
                diviceStatus ? '#fff' : theme.Colors.grays[8]};
            }
          }
        }
      }
    }
  }
  & > div:last-child {
    min-height: 60px;
    display: flex;
    align-items: center;
  }
`;
