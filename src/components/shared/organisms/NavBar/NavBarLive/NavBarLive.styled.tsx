import styled, { css } from 'styled-components';
import { INavBarLiveProps } from './NavBarLive.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledNavBarLive = styled.nav<INavBarLiveProps>`
  background: url('/images/Navbar_Background.svg');
  background-blend-mode: lighten;
  background-color: ${({ theme }) => theme.Colors.purples[1]};
  background-size: 100vw;
  background-position-y: -30px;
  background-position-x: -60px;
  border-radius: 0 0 24px 24px;
  padding: 20px 38px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  height: 84px;
  width: 100%;
  min-width: 1365px;
  span {
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    border-radius: 50px;
    padding: 5px 10px;
    div {
      background: transparent;
      border-radius: 50px;
      height: 38px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
    &:hover {
      transition: background-color 0.5s;
      & * {
        background-color: ${({ theme }) => theme.Colors.grays[10]};
        color: ${({ theme }) => theme.Colors.purples[1]};
        cursor: pointer;
      }
    }
  }
`;
export const Logo = styled.div`
  & img {
    width: 150px;
    padding: 10px 0px 10px 0px;
    margin: 0;
    transform: translate(-40px, -30px);
  }
`;

export const WrapperChackedAgent = styled.button<INavBarLiveProps>`
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

export const Ailalia = styled.div`
  margin-left: 8px;
  margin-top: 2px;
  & > div {
    width: 88px;
    & > div {
      padding: 12px 0px 10px 0px;
      & > svg {
        width: 84px;
        height: 22px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  & > button {
    padding-right: 28px;
  }
`;

export const StyledAgentStatusSropdown = styled.div`
  width: 230px;
  background: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  height: 128px;
  box-shadow: 0px 0px 7px 0px #0000004a;
  padding: 14px 0 0 18px;
`;

export const NotificationStyledNavBar = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.Colors.orange[4]};
  position: relative;
  top: 23px;
  right: 34px;
`;

export const Letter = styled.div`
  width: 395px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  padding: 2px 36px 0px 54px;
  & > span {
    & > div {
      & > div {
        & > div {
          & > div {
            padding: 0px;
            height: 2px;
          }
        }
      }
    }
  }
`;

export const TriggerElement = styled.div<INavBarLiveProps>`
  border-radius: 24px;
  background: ${({ statusChecked, theme }) =>
    mySelector(statusChecked === 'Disponible', theme.Colors.green[3], null) ||
    mySelector(
      statusChecked === 'En Pausa - Baño',
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
`;

export const MessageIcon = styled.div`
  padding: 8px 0px 0px 0px;
  width: 30px;
  & > div {
    & > div {
      & > div {
        & > svg {
          width: 30px;
          height: 24px;
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
            opacity: 0.8;
          }
        }
      }
    }
  }
`;
export const BellIcon = styled.div`
  padding: 12px 28px 0px 28px;
  width: 74px;
  cursor: pointer;
  & > div {
    & > div {
      & > div {
        & > svg {
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
            opacity: 0.8;
          }
        }
      }
    }
  }
`;

export const StyledButton = styled.div<INavBarLiveProps>`
  border-radius: 50%;
  width: 24px;
  min-height: 24px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 7px;
  ${({ focusCheck }) =>
    focusCheck &&
    css<INavBarLiveProps>`
      border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;

export const StyledRadio = styled.div<INavBarLiveProps>`
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
    css<INavBarLiveProps>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;

export const LiveNavDropdownContainer = styled.div`
  width: 207px;
  height: 102px;
  border-radius: 16px;
  background: ${({ theme }) => theme && theme.Colors.grays[3]};
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: absolute;
  right: 10px;
  top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  z-index: 1;
  & > :first-child {
    & > :first-child {
      & > :first-child {
        transform: translateY(-2px);
      }
    }
  }
  & > button {
    width: 85%;
    & > div {
      justify-content: flex-start;
      width: 100%;
      background-color: transparent;
      align-items: center;
      border-radius: 2px;
      &:hover {
        & > span {
          color: ${({ theme }) => theme && theme.Colors.purples[3]};
        }
        cursor: pointer;
      }
      &:active {
        & > span {
          color: ${({ theme }) => theme && theme.Colors.grays[8]};
        }
      }
    }
  }
`;

export const LiveTriggerElement = styled.div`
  position: relative;
  width: max-content;
  margin-right: 24px;
  display: flex;
  align-items: center;
  & svg {
    transform: translateY(-8px);
  }
`;

export const LiveStyledAvatar = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  & > img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
  }
  & > :first-child {
    & > div {
      & > div {
        // transform: translate(-1px, 7px);
        top: 7px;
        display: flex;
        position: absolute;
      }
    }
  }
  & svg {
    border: 4px solid ${({ theme }) => theme && theme.Colors.purples[3]};
    width: 48px;
    height: 48px;
    border-radius: 50%;
    padding: 5px;

    & path {
      transform: translateY(-13px);
      fill: ${({ theme }) => theme && theme.Colors.grays[8]};
    }
  }
`;

export const LiveArrowIcon = styled.button`
  padding-left: 8px;
  & > div {
    & > div {
      & > div {
        & > svg {
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme && theme.Colors.purples[3]};
          }
        }
      }
    }
  }
`;
