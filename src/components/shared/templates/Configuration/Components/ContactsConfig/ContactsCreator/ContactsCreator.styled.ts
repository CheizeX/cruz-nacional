/* eslint-disable sonarjs/no-identical-functions */
import styled, { css } from 'styled-components';
import { IContainerInputProps } from '../../../../../molecules/Input/ContainerInput.interface';
import { StyledColorCheckboxProps } from '../../../../../organisms/UserTagsModals/CreateUserTagModal/CreateUserTagModal.interface';
import { myTagColorSelector } from '../../../../../organisms/UserTagsModals/CreateUserTagModal/CreateUserTagModal.shared';

export const StyledContactsCreator = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  height: 405px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 5px 0 0;
`;

export const StyledContactsCreatorHeader = styled.div`
  position: relative;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 25px;
  transition: all 0.2s ease-in-out;
  & > span {
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > button {
    & :hover {
      cursor: pointer;
      & > svg {
        transition: all 0.2s ease-in-out;
        transform: translateX(-2px);
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.Colors.purples[2]};
      }
    }
    & > svg {
      width: 20px;
      height: 20px;
      fill: ${({ theme }) => theme.Colors.grays[5]};
    }
  }

  & > div {
    transform: translateX(30%);
    & > div {
      & > div {
        & > svg {
          width: 18px;
          height: 18px;
          & > path {
            fill: ${({ theme }) => theme.Colors.purples[3]};
          }
        }
      }
    }
  }
`;

export const StyledStatusCreatorBody = styled.div`
  min-width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * {
      margin: 0;
    }
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      position: relative;
      & input {
        width: 230px;
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        padding-left: 10px;
        &::placeholder {
          padding-left: 3px;
          transform: translateY(2px);
          font-size: ${({ theme }) => theme.fontSize[14]};
          color: ${({ theme }) => theme.Colors.grays[7]};
        }
      }
      & > :first-child {
        display: none;
      }
      & > :last-child {
        margin: 0px;
        padding: 0px;
        position: absolute;
        right: 15px;
        top: 12px;
        & > svg {
          width: 14px;
          height: 14px;
          fill: ${({ theme }) => theme.Colors.grays[8]};
        }
      }
    }
    & > :last-child {
      margin-left: 7px;
      width: 35px;
    }
  }
  & > button {
    min-height: 40px;
    margin-top: 10px;
    width: 100%;
    & > span {
      font-weight: 400;
    }
  }
`;

export const StyledStatusArrayContainer = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 250px;
  justify-content: flex-basis;
  margin-bottom: 30px;
  margin-top: 16px;
  overflow-y: scroll;
  padding: 10px;
  width: 101%;
  &::-webkit-scrollbar {
    display: none;
  }
  & > span {
    background: ${({ theme }) => theme.Colors.grays[10]};
    width: 100%;
    min-height: 50px;
    border-radius: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: 500;
    & > article {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 40px;
      & > :first-child {
        & :hover {
          cursor: pointer;
          & > path {
            stroke: ${({ theme }) => theme.Colors.grays[5]};
          }
        }
        & :active {
          & > path {
            stroke: ${({ theme }) => theme.Colors.grays[8]};
          }
        }
        & > path {
          stroke: ${({ theme }) => theme.Colors.grays[8]};
        }
      }
      & > :last-child {
        width: 16px;
        height: 16px;
        & :hover {
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[5]};
          }
        }
        & :active {
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[8]};
          }
        }
        & > path {
          fill: ${({ theme }) => theme.Colors.grays[8]};
        }
      }
    }
  }
`;

export const StyledAddStatusButton = styled.button`
  border-radius: 50%;
  height: 38px;
  width: 40px;
  margin: 0;
  padding: 0;
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

// ADDING NEW STATUS
export const StyledAddingNewStatusBody = styled.div<IContainerInputProps>`
  background: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 457px;
  padding: 20px;
  text-align: left;
  width: 100%;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    margin: 10px 0 20px 16px;
  }
  & > :nth-child(2) {
    padding: 0;
    margin: 10px 0 20px 0;
    display: flex;
    align-items: center;
    & > input {
      border-radius: 10px;
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: 500;
      ${({ color }) =>
        color &&
        css`
          color: ${color};
        `}
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
  margin-bottom: 40px;
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

export const StyledStatusLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  & > svg {
    fill: ${({ theme }) => theme.Colors.grays[6]};
  }
`;
