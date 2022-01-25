import styled, { css } from 'styled-components';
import { StyledColorCheckboxProps } from './CreateUserTagModal.interface';
import { myTagColorSelector } from './CreateUserTagModal.shared';

export const StyledModalCreateUserTag = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  height: 512px;
  width: 341px;
`;

export const StyledModalHeader = styled.div`
  align-items: center;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 21px;
  width: 100%;
  & > span {
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 20px;
    }
  }
  & button {
    height: 13px;
    width: 13px;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledModalBody = styled.div`
  background: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 457px;
  padding: 20px;
  text-align: left;
  width: 100%;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    margin: 20px 0 20px 16px;
  }
  & > :nth-child(2) {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    margin: 2px 0 12px 0;
    & input {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
    }
    & > button {
      display: none;
    }
  }
  & button {
    margin-top: 30px;
    width: 100%;
  }
`;

export const StyledModalColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-basis;
  margin-bottom: 30px;
  margin-top: 10px;
  min-height: 105px;
  width: 101%;
  & div {
    height: 39px;
    margin: 0 5.5px;
    width: 39px;
  }
`;

export const StyledColorCheckbox = styled.div<StyledColorCheckboxProps>`
  background-color: ${({ name, theme }) =>
    myTagColorSelector(name === '0', theme.Colors.blue[1], null) ||
    myTagColorSelector(name === '1', theme.Colors.green[2], null) ||
    myTagColorSelector(name === '2', theme.Colors.orange[3], null) ||
    myTagColorSelector(name === '3', theme.Colors.blue[2], null) ||
    myTagColorSelector(name === '4', theme.Colors.orange[4], null) ||
    myTagColorSelector(name === '5', theme.Colors.green[5], null) ||
    myTagColorSelector(name === '6', theme.Colors.purples[4], null) ||
    myTagColorSelector(name === '7', theme.Colors.purples[5], null) ||
    myTagColorSelector(name === '8', theme.Colors.grays[4], null) ||
    myTagColorSelector(name === '9', theme.Colors.green[1], null)};
  border-radius: 3px;
  display: inline-block;
  & :hover {
    cursor: pointer;
  }
  ${({ checked }) =>
    !checked &&
    css`
      & svg {
        & polyline {
          display: none;
        }
      }
    `}
`;

export const StyledIconCheckTag = styled.svg<StyledColorCheckboxProps>`
  fill: none;
  height: 38px;
  stroke: ${({ theme }) => theme.Colors.grays[10]};
  stroke-width: 3px;
  width: 38px;
`;
