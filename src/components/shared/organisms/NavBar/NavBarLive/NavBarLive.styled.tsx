import styled from 'styled-components';
import { INavBarContainer, INavBarLiveProps } from './NavBarLive.interface';

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
  & > :nth-child(2) {
    width: 502px;
    display: flex;
    justify-content: flex-end;
    & > :first-child {
      display: flex;
      align-items: center;
      min-width: 334px;
      max-width: 392px;
      width: 100%;
      justify-content: end;
      margin-right: 24px;
      & > :first-child {
        display: flex;
      }
    }
  }
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
  justify-content: start;
  padding: 2px 36px 0px 54px;
  & > button {
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
    & > div {
      & > span {
        font-size: ${({ theme }) => theme.fontSize[14]};
        font-weight: ${({ theme }) => theme.fontWeight[700]};
        line-height: 14px;
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
  width: 54px;
  display: flex;
  align-items: center;
  height: 28px;
  justify-content: flex-start;
  position: relative;
  & > :first-child {
    border-radius: 50%;
    background: #1ec143;
    width: 20px;
    height: 20px;
    position: absolute;
    color: ${({ theme }) => theme.Colors.grays[10]};
    top: -6px;
    right: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
  & > div {
    & > div {
      & > div {
        & > svg {
          width: 32px;
          height: 32px;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
            opacity: 0.8;
          }
        }
      }
    }
  }
`;

export const StyledWarning = styled.div`
  width: 54px;
  display: flex;
  align-items: center;
  padding-top: 1px;
  position: relative;
  height: 28px;
  & > :first-child {
    border-radius: 50%;
    background: #f78f28;
    width: 20px;
    height: 20px;
    position: absolute;
    color: ${({ theme }) => theme.Colors.grays[10]};
    top: -6px;
    right: 14px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
  & > svg {
    width: 32px;
    height: 32px;
    & > path {
      fill: ${({ theme }) => theme.Colors.grays[10]};
      opacity: 0.8;
    }
  }
`;

export const StyledClose = styled.div`
  width: 54px;
  display: flex;
  align-items: center;
  padding-top: 1px;
  position: relative;
  height: 28px;
  & > :first-child {
    border-radius: 50%;
    background: #ff6641;
    width: 20px;
    height: 20px;
    position: absolute;
    color: ${({ theme }) => theme.Colors.grays[10]};
    top: -6px;
    right: 8px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
  & > svg {
    width: 30px;
    height: 30px;
    & > path {
      fill: ${({ theme }) => theme.Colors.grays[10]};
      opacity: 0.8;
    }
  }
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

export const ButtonSelectedComponent = styled.button<INavBarContainer>`
  & > :first-child {
    background-color: ${({ theme, isFocus }) =>
      isFocus === true ? theme.Colors.grays[10] : 'transparent'};
    & > span {
      color: ${({ theme, isFocus }) =>
        isFocus === true ? theme.Colors.purples[1] : theme.Colors.grays[10]};
    }
  }
  &:hover {
    & span {
      color: ${({ theme }) => theme.Colors.purples[1]};
    }
  }
`;
