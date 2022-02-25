import styled, { css } from 'styled-components';
import { IPropsWraperDropdownStatus } from './DropdownStatus.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledDropdownStatus = styled.div<IPropsWraperDropdownStatus>`
  position: relative;
  width: 142px;
  & > button {
    border-radius: 24px;
    background: ${({ statusChecked, theme }) =>
      mySelector(statusChecked === 'Disponible', theme.Colors.green[3], null) ||
      mySelector(
        statusChecked === 'En Pausa - Baño',
        theme.Colors.orange[3],
        null,
      ) ||
      mySelector(
        statusChecked === 'En Pausa - En llamado',
        theme.Colors.orange[3],
        null,
      ) ||
      mySelector(
        statusChecked === 'En Pausa - Almuerzo',
        theme.Colors.orange[3],
        null,
      )};
    padding: 4px 12px;
    width: max-content;
    cursor: pointer;
    margin-left: 1px;
    display: flex;
    min-width: 109px;
    min-height: 31px;
    & > div {
      padding: 6px;
      span {
        line-height: 4px;
      }
      & > div {
        padding-top: 4px;
        & > div {
          & > svg {
            padding: 1px;

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
  height: 156px;
  box-shadow: 0px 0px 7px 0px #0000004a;
  padding: 14px 0 0 18px;
  position: absolute;
  z-index: 1;
  margin-top: 10px;
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
      mySelector(position === 'one', theme.Colors.green[4], null) ||
      mySelector(position === 'two', theme.Colors.orange[3], null) ||
      mySelector(position === 'three', theme.Colors.orange[3], null)};
    & > div {
      & * {
        & > svg {
          width: ${({ position }) =>
            mySelector(position === 'one', '13px', null) ||
            mySelector(position === 'two', '9', null) ||
            mySelector(position === 'three', '9', null)};
          height: 11px;
          margin: ${({ position }) =>
            mySelector(position === 'one', '5px', null) ||
            mySelector(position === 'two', '5.5px', null) ||
            mySelector(position === 'three', '6.5px', null)};
          & > path {
            fill-opacity: 1;
            fill: ${({ theme }) => theme.Colors.grays[10]};
          }
        }
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
  margin-right: 7px;
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
