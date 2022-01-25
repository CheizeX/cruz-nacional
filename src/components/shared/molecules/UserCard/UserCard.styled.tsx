import styled from 'styled-components';
import { IUserCardContainerProps } from './UseCard.interface';

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
`;

export const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  margin-bottom: 31px;
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
    :hover {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
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
    top: -11px;
  }
  svg {
    align-self: baseline;
    position: relative;
    top: -23px;
    width: 56px;
  }
`;

export const StyledUsernameEmail = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  position: relative;
  top: -25px;
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
