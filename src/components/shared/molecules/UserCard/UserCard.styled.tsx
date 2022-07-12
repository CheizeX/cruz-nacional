import styled from 'styled-components';
import { IContainerTag, IUserCardContainerProps } from './UseCard.interface';

export const StyledUserCardMolecule = styled.div<IUserCardContainerProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 12.5px;
  display: flex;
  flex-direction: column;
  height: 162px;
  padding: 15px;
  margin: 13px 0 0px 13px;
  width: 230px;
  opacity: ${({ invitation }) => (invitation ? 'none' : 0.8)};
  & > span {
    width: 100%;
    margin-top: -10px;
    margin-left: -8px;
    z-index: 1;
    & > div {
      margin-left: -10px;
      & > div {
        & > div {
          border-radius: 50%;
          box-shadow: -1px 0 2px ${({ theme }) => theme.Colors.grays[10]};
        }
      }
    }
    & > :first-child {
      margin-left: 0px;
    }
  }
`;

export const StyledTag = styled.div<IContainerTag>`
  background-color: ${({ colorTag }) => colorTag};
  min-width: 24px;
  min-height: 24px;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  color: ${({ theme }) => theme.Colors.grays[10]};
`;

export const StyledCardHeader = styled.div<IUserCardContainerProps>`
  align-items: center;
  display: flex;
  //height: 60px;
  min-height: 20px;
  max-height: 24px;
  z-index: 1;
  justify-content: flex-end;
  //margin-bottom: 31px;
  position: relative;
  width: 100%;
  & div {
    z-index: 1;
  }
  & > span {
    align-self: flex-end;
    left: 0;
    position: absolute;
    top: 0;
    /* :hover {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
    } */
    & > svg {
      fill: ${({ theme }) => theme.Colors.green[2]};
      fill: ${({ theme, isAdmin }) =>
        isAdmin ? theme.Colors.orange[2] : theme.Colors.green[2]};
      & > path {
        stroke: ${({ theme, isAdmin }) => isAdmin && theme.Colors.orange[2]};
      }
    }
    & > div {
      width: 100%;
      height: 24px;
      & * {
        color: ${({ theme }) => theme.Colors.grays[10]};
        & > svg {
          & > path {
            fill: ${({ theme }) => theme.Colors.orange[2]};
            opacity: 0.9;
          }
        }
      }
    }
  }

  & button:hover {
    cursor: pointer;
    & svg {
      & > * {
        fill: ${({ theme }) => theme.Colors.purples[1]};
      }
    }
  }
  & button:active {
    & svg {
      & > * {
        fill: ${({ theme }) => theme.Colors.purples[2]};
      }
    }
  }
  svg {
    height: 18px;
    width: 23px;
  }
`;

export const TriggerElement = styled.div`
  border-radius: 24px;
  cursor: pointer;
  height: 20px;
  margin-left: 10px;
  pointer-events: none;
  width: 18px;
  svg {
    height: 18px;
  }
`;

export const DropdownContainer = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 8px;
  & > div {
    display: flex;
    border-radius: 4px;
    justify-content: flex-start;
    width: 100%;
    &:hover {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
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

export const StyledAvatar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 60px;
  position: relative;
  text-align: center;
  top: -20px;
  width: 100%;
  & > img {
    object-fit: cover;
    border-radius: 50%;
    width: 54px;
    height: 54px;
    position: absolute;
    //top: -11px;
  }
  svg {
    align-self: baseline;
    position: relative;
    //top: -23px;
    width: 56px;
    height: 54px;
  }
`;

export const StyledUsernameEmail = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  //height: 100px;
  // max-height: 40px;
  justify-content: center;
  position: relative;
  //top: -25px;
  top: -5px;
  width: 100%;
  & > :first-child {
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > :last-child {
    color: ${({ theme }) => theme.Colors.grays[5]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
`;
