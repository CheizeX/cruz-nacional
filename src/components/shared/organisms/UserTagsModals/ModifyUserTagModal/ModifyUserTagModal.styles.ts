import styled, { css } from 'styled-components';
import { StyledColorCheckboxProps } from './ModifyUserTagModal.interface';
import { myTagsSelector } from './ModifyUserTagModal.shared';

export const StyledButtonModifyUserTag = styled.button`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  & div {
    &:hover {
      cursor: pointer;
      opacity: 0.95;
    }
    &:active {
      opacity: 1;
    }
  }
`;

export const StyledModalModifyUserTag = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  height: 512px;
  width: 341px;
`;

export const StyledModalHeaderModifyTags = styled.div`
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

export const StyledModalBodyModifyTags = styled.div`
  background: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 457px;
  padding: 20px;
  width: 100%;
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * {
      margin: 0;
    }
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      & input {
        width: 220px;
        background-color: ${({ theme }) => theme.Colors.grays[9]};
      }
      & button {
        display: none;
      }
    }
    & button {
      margin-left: 12px;
      width: 35px;
    }
  }
  & > :nth-child(3) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const StyledModalColorsModifyTags = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 360px;
  justify-content: flex-basis;
  margin-bottom: 30px;
  margin-top: 16px;
  overflow-y: scroll;
  padding-top: 10px;
  width: 101%;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    & > :first-child {
      display: flex;
      flex-direction: row;
      &:hover {
        & > div {
          cursor: pointer;
        }
      }
    }
    & button {
      margin: 0;
      text-align: right;
    }
    & > :nth-child(3) {
      z-index: 3;
    }
  }
  & span {
    margin-left: 12px;
    display: flex;
    justify-content: flex-start;
  }
`;

export const StyledModifyTagTriggerElement = styled.div`
  cursor: pointer;
  height: 20px;
  margin-left: 10px;
  & * {
    width: fit-content;
    fill: ${({ theme }) => theme.Colors.grays[10]};
    height: 18px;
    &:hover {
      fill: ${({ theme }) => theme.Colors.purples[1]};
    }
    &:active {
      fill: ${({ theme }) => theme.Colors.purples[2]};
    }
  }
`;

export const ModifyTagsDropdownContainer = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 8px;
  & div {
    &:hover {
      & * {
        color: ${({ theme }) => theme.Colors.purples[1]};
        fill: ${({ theme }) => theme.Colors.purples[1]};
      }
    }
    &:active {
      & * {
        color: ${({ theme }) => theme.Colors.purples[2]};
        fill: ${({ theme }) => theme.Colors.purples[2]};
      }
    }
  }
  & span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
  & svg {
    height: 13px;
    width: 13px;
    & path {
      fill: ${({ theme }) => theme.Colors.grays[3]};
    }
  }
`;

export const StyledModifyTag = styled.div<StyledColorCheckboxProps>`
  width: 280px;
  height: 42px;
  background-color: ${({ color, theme }) =>
    myTagsSelector(color === '#3AA4FF', theme.Colors.blue[1], null) ||
    myTagsSelector(color === '#8BDFD0', theme.Colors.green[2], null) ||
    myTagsSelector(color === '#F78F28', theme.Colors.orange[3], null) ||
    myTagsSelector(color === '#4D5ECA', theme.Colors.blue[2], null) ||
    myTagsSelector(color === '#FA5F5F', theme.Colors.orange[4], null) ||
    myTagsSelector(color === '#439152', theme.Colors.green[5], null) ||
    myTagsSelector(color === '#C155F0', theme.Colors.purples[4], null) ||
    myTagsSelector(color === '#D03AC9', theme.Colors.purples[5], null) ||
    myTagsSelector(color === '#707070', theme.Colors.grays[4], null) ||
    myTagsSelector(color === '#24C3A7', theme.Colors.green[1], null)};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 10px;
  margin-bottom: 10px;

  ${({ isWhite, checked }) =>
    isWhite &&
    checked &&
    css`
      background-color: white;
    `}
`;
