import styled from 'styled-components';
import { IWrapperPredefinedSound } from './PredefinedSounds.interface';

export const StyledWrapperNotificationSounds = styled.div`
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
export const NotificationSoundsHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 25px;
  & > span {
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.grays[1]};
  }

  & > div {
    transform: translateX(30%);
    & * {
      & > svg {
        width: 18px;
        height: 18px;
        & > path {
          fill: ${({ theme }) => theme.Colors.purples[3]};
        }
      }
    }
  }
  & > svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.Colors.grays[1]};
  }
`;
export const NotificationSoundsBody = styled.div`
  min-width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
  & > span {
    color: ${({ theme }) => theme.Colors.purples[2]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    width: 100%;
    margin: 0px 0 0px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
  }
  & > :first-child {
    margin: 10px 0 20px 0;
    padding: 0px 5px;
  }
  & > :nth-child(2) {
    height: 230px;
  }
  & > :nth-child(4) {
    height: 122px;
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
export const ToogleComponentForMappedRestrictionsNoSel = styled.button`
  min-width: 32px;
  width: 32px;
  min-height: 16px;
  height: 16px;
  border-radius: 27px;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  box-shadow: inset 0 0 2px ${({ theme }) => theme.Colors.grays[8]};
  display: flex;
  align-items: center;
  padding: 0;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    cursor: pointer;
  }
  & > div {
    transition: all 0.3s ease-in-out;
    transform: translateX(2px);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.grays[5]};
  }
`;

export const ToogleComponentForMappedRestrictions = styled.button`
  min-width: 32px;
  width: 32px;
  height: 16px;
  border-radius: 27px;
  background-color: rgba(30, 193, 67, 0.22);
  display: flex;
  align-items: center;
  padding: 0;
  &:hover {
    cursor: pointer;
    outline: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  }
  & > div {
    transition: all 0.3s ease-in-out;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.green[4]};
    transform: translateX(16px);
  }
`;
export const StyledWrapperSoundsPending = styled.div<IWrapperPredefinedSound>`
  width: 100%;
  & > button {
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    border-bottom: 1px solid
      ${({ theme, openContainer }) =>
        openContainer ? 'none' : theme.Colors.grays[9]};
    &:hover {
      color: ${({ theme }) => theme.Colors.purples[2]};
    }
    &:active {
      color: ${({ theme }) => theme.Colors.purples[1]};
    }
    & > div {
      & * {
        display: flex;
        align-items: center;
        height: 100%;
      }
      & > span {
        color: ${({ theme }) => theme.Colors.purples[2]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        width: 100%;
        margin: 0px 0 0px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5px;
      }
      & > :last-child {
        display: flex;
        justify-content: end;
        & div {
          display: flex;
          justify-content: flex-end;
          padding-right: 4px;
        }
      }
    }
  }
`;

export const StyledWrapperListSounds = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    max-height: 122px;
    width: 100%;
    overflow: scroll;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    &::-webkit-scrollbar {
      display: none;
    }
    & > button {
      cursor: pointer;
      display: flex;
      height: 100%;
      min-height: 34px;
      & > :first-child {
        display: flex;
        margin-top: -3px;
      }
      & > span {
        color: ${({ theme }) => theme.Colors.grays[1]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        display: flex;
        align-items: center;
        text-align: center;
        height: 100%;
        min-height: 32px;
        padding-left: 10px;
      }
    }
  }
`;
export const StyledListSound = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > button:first-child {
    cursor: pointer;
    display: flex;
    height: 100%;
    min-height: 34px;
    & > :first-child {
      display: flex;
      margin-top: -4px;
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      display: flex;
      align-items: center;
      text-align: center;
      height: 100%;
      min-height: 32px;
      padding-left: 10px;
    }
  }
  & > button:last-child {
    cursor: pointer;
    & > svg {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
    :hover {
      & > svg {
        fill: ${({ theme }) => theme.Colors.grays[4]};
      }
    }
  }
`;
