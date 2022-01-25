/* eslint-disable react/button-has-type */

import styled, { css } from 'styled-components';
import {
  SideBarContainersProps,
  StyledSideBarProps,
} from './SideBar.interface';

export const StyledSideBar = styled.aside<
  Pick<StyledSideBarProps, 'collapseArrow'>
>`
  align-items: center;
  background-blend-mode: lighten;
  background-color: ${({ theme }) => theme.Colors.purples[1]};
  background-image: url('/images/BackGround.svg');
  background-size: 262px 768px;
  background-position-y: 60px;
  background-position-x: 5px;
  border-radius: 0 20px 20px 0;
  box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  min-height: 768px;
  min-width: 272px;
  max-width: 272px;
  & * {
    margin: 0px;
    padding: 0px;
  }

  // *** Collapsed SideBar <CSS> ***

  ${({ collapseArrow }) =>
    collapseArrow &&
    css`
      transition: ease all.1s;
      min-width: 111px;
    `}
`;

export const SideBarTopContainer = styled.div<SideBarContainersProps>`
  transition: ease all.4s;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 45px 10px 0 25px;
  width: 100%;
  & span {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 32px;
    margin-left: 8px;
    transition: ease all.5s;
    width: 85%;
    & div {
      align-items: center;
      background-color: transparent;
      display: flex;
      margin-right: 8px;
      min-height: 24px;
      text-align: left;
      width: fit-content;
      height: 100px;
      & div {
        height: 100%;
        & div {
          height: 100%;
          & svg {
            transform: translateX(-10px);
            height: 100%;
          }
        }
      }
      & div {
        align-items: flex-end;
        height: 100%;
      }
      & img {
        position: absolute;
        width: 190px;
        transform: translate(-30px, -8px);
      }
    }
  }
  & button {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: flex-start;
    padding-bottom: 15px;
    width: 15%;
    & div {
      height: fit-content;
      & svg {
        transition: ease 0.1s;
        &:hover {
          cursor: pointer;
          opacity: 0.8;
          transition: ease 0.1s;
          transform: translateX(-3px);
        }
      }
    }
  }
  ${({ collapseArrow }) =>
    collapseArrow &&
    css<SideBarContainersProps>`
      width: 100%;
      & span {
        & div {
          & img {
            position: absolute;
            transform: translate(-35px, -15px);
                width: 110px;
                padding:0;
                margin:0;
          }
          & div {
            & div {
              & svg {
                transform: translateX(-10px);
                height: 34px;
                width: 34px;
              }
            }
          }
        }
      }
      & button {
        & div {
          & svg {
            transform: translate(-45px, 30px);
            &:hover {
              transform: translate(-43px, 30px);
          }
        }
      }
    `};
`;

export const SideBarBodyContainer = styled.div<SideBarContainersProps>`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  overflow-x: clip;
  width: 237px;
  align-items: center;

  ${({ collapseArrow }) =>
    collapseArrow &&
    css<SideBarContainersProps>`
      align-items: center;
      width: 100%;
      & button {
        width: 75px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        & > div {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          padding: 0;
          & * {
            margin: 0 auto;
          }
          & canvas {
            margin: 0 auto;
            width: 30px;
          }
        }
        & span {
          display: none;
        }
      }
    `}
`;

export const StyledWrapperButton = styled.button<SideBarContainersProps>`
  background-color: ${({ focused, theme }) =>
    focused ? theme.Colors.grays[10] : 'transparent'};
  box-shadow: 0 2px 10px
    ${({ focused }) => (focused ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  height: 56px;
  width: 95%;
  border-radius: 50px;
  align-items: center;
  margin: 5px 0;
  & > div {
    display: flex;
    align-items: center;
    background-color: ${({ focused, theme }) =>
      focused ? theme.Colors.grays[10] : 'transparent'};
    padding-left: 30px;
    & > div {
      text-align: center;
      & div {
        display: flex;
        align-items: center;
      }
      & path,
      span {
        fill: ${({ focused, theme }) =>
          focused ? theme.Colors.purples[1] : theme.Colors.grays[10]};
      }
    }
    & span {
      font-size: ${({ theme }) => theme.fontSize[16]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      height: 20px;
      padding-left: 20px;
      color: ${({ focused, theme }) =>
        focused ? theme.Colors.purples[1] : theme.Colors.grays[10]};
      fill: ${({ focused, theme }) =>
        focused ? theme.Colors.purples[1] : theme.Colors.grays[10]};
    }
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ focused, theme }) =>
      focused ? null : theme.Colors.grays[10]};

    & > div {
      background-color: ${({ focused, theme }) =>
        focused ? null : theme.Colors.grays[10]};

      & > div {
        & path,
        span {
          color: ${({ focused, theme }) =>
            focused ? null : theme.Colors.purples[1]};
          fill: ${({ focused, theme }) =>
            focused ? null : theme.Colors.purples[1]};
          transition: 0.7s;
        }
      }
    }
    & span {
      color: ${({ focused, theme }) =>
        focused ? null : theme.Colors.purples[1]};
    }
  }
  &:active {
    cursor: pointer;
    background-color: ${({ focused, theme }) =>
      focused ? null : theme.Colors.purples[1]};
    outline: 2px solid white;
    box-shadow: 0 3px 10px ${({ theme }) => theme.Colors.grays[1]};

    & > div {
      background-color: ${({ focused, theme }) =>
        focused ? null : theme.Colors.purples[1]};
      & > div {
        & path,
        span {
          color: ${({ focused, theme }) =>
            focused ? null : theme.Colors.grays[10]};
          fill: ${({ focused, theme }) =>
            focused ? null : theme.Colors.grays[10]};
        }
      }
    }
    & span {
      color: ${({ focused, theme }) =>
        focused ? null : theme.Colors.grays[10]};
    }
  }
`;
