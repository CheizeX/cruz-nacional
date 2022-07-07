import styled, { css } from 'styled-components';
import { IPropsWraperDropdownStatus } from './DropdownStatus.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledDropdownStatus = styled.div<IPropsWraperDropdownStatus>`
  position: relative;
  max-width: 220px;
  display: flex;
  justify-content: end;
  min-width: 220px;
  width: max-content;
  & > button {
    border-radius: 24px;
    background: ${({ statusChecked, theme }) =>
      mySelector(
        statusChecked === 'Disponible' || statusChecked === 'Activo',
        theme.Colors.green[3],
        theme.Colors.orange[3],
      )};
    padding: 4px 12px;
    justify-content: space-between;
    width: max-content;
    cursor: pointer;
    margin-left: 1px;
    display: flex;
    min-height: 31px;
    & > span {
      display: flex;
      width: fit-content;
    }
    & > div {
      padding: 6px;
      width: 10px;
      height: 10px;
      span {
        line-height: 4px;
      }
      & > div {
        padding-top: 12px;
        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          & > svg {
            padding: 1px;
            fill: ${({ theme }) => theme.Colors.grays[10]};
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
    }
  }
`;

export const StyledAgentStatusDropdown = styled.div`
  width: 240px;
  background: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  min-height: 156px;
  box-shadow: 0px 0px 7px 0px #0000004a;
  padding: 14px 0 10px 8px;
  position: absolute;
  z-index: 1;
  margin-top: 10px;
  top: 35px;
  right: 0;
  & > :nth-child(4) {
    & > :nth-child(2) {
      & > div {
        & * {
          & > svg {
            & > g {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[10]};
              }
            }
          }
        }
      }
    }
  }
`;
export const WrapperChackedAgent = styled.button<IPropsWraperDropdownStatus>`
  height: 32px;
  width: 100%;
  display: flex;
  flex-direction: initial;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  & > :nth-child(1) {
    height: fit-content;
  }
  & > :nth-child(2) {
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ position, theme }) =>
      mySelector(
        position === 'one',
        theme.Colors.green[4],
        theme.Colors.orange[3],
      )};
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 3px;
      & * {
        width: 100%;
        height: 100%;
        max-width: 12px;
        max-height: 12px;
        fill: ${({ theme }) => theme.Colors.grays[10]};
        color: ${({ theme }) => theme.Colors.grays[10]};
        fill-opacity: 1;
      }
    }
  }
  & span {
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: 14px;
    color: ${({ theme }) => theme.Colors.grays[3]};
    cursor: pointer;
  }
`;

export const StyledButton = styled.div<IPropsWraperDropdownStatus>`
  border-radius: 50%;
  width: 24px;
  min-height: 24px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 10px;
  ${({ focusCheck }) =>
    focusCheck &&
    css<IPropsWraperDropdownStatus>`
      border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;

export const StyledRadio = styled.div<IPropsWraperDropdownStatus>`
  height: 14px;
  width: 14px;
  max-height: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  display: flex;
  margin: auto;
  align-content: center;
  text-align: center;
  position: relative;
  top: 3px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  ${({ focusCheck }) =>
    focusCheck &&
    css<IPropsWraperDropdownStatus>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;
