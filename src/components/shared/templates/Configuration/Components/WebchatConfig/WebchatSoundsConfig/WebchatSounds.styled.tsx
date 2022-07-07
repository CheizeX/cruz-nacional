import styled from 'styled-components';
import { IWrapperWebchatSounds } from './WebchatSounds.interface';

export const StyledWebchatWrapperNotificationSounds = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  max-height: 200px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 30px;
`;
export const WebchatNotificationSoundsHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  & > span {
    padding: 5px 10px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.Colors.purples[2]};
    font-weight: 600;
    color: ${({ theme }) => theme.Colors.grays[10]};
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
export const WebchatNotificationSoundsBody = styled.div`
  min-width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  padding: 0px 15px;
  padding-left: 20px;
  & > span {
    color: ${({ theme }) => theme.Colors.purples[2]};
    font-size: ${({ theme }) => theme.fontSize[10]};
    width: 100%;
    margin: 0px 0 0px 0;
    display: flex;
    justify-content: space-between;
    align-items: start;
    & > span {
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
    }
  }
  & > :first-child {
    margin: 15px 0 10px 0;
  }
  & > :nth-child(2) {
    height: fit-content;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    transform: translateX(-5px);
    & > div {
      width: 100%;
      justify-content: center;
      align-items: center;
      & > button {
        width: 100%;
        padding-left: 0px;
        margin-bottom: 0px;
        & > div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          & > span {
            display: flex;
            justify-content: start;
            align-items: center;
            /* width: 100%; */
          }
        }
      }
    }
  }
  & > :nth-child(4) {
    height: 122px;
  }

  & > button {
    min-height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    & > span {
      font-weight: 400;
    }
  }
`;
export const WebchatToogleComponentForMappedRestrictionsNoSel = styled.button`
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

export const WebchatToogleComponentForMappedRestrictions = styled.button`
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
export const StyledWebchatWrapperSoundsPending = styled.div<IWrapperWebchatSounds>`
  width: 100%;
  padding: 0;
  align-items: space-between;
  & > div {
    margin: 5px 0px;
    border: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    border-radius: 10px;
    padding: 5px;
    width: 310px;
  }
  & > button {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: space-between;
    justify-content: flex-start;
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
          justify-content: flex;
          padding-right: 4px;
        }
      }
    }
  }
`;

export const StyledWebchatWrapperListSounds = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    max-height: 100px;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    padding-right: 10px;
    & ::-webkit-scrollbar {
      border-radius: 4px;
      outline: 2px solid ${({ theme }) => theme.Colors.grays[9]};
      width: 10px;
    }
    & ::-webkit-scrollbar-track {
      border-radius: 10px;
      width: 8px;
    }
    & ::-webkit-scrollbar-button {
      border-radius: 10px;
      width: 7px;
      height: 2px;
    }
    & ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      border-radius: 10px;
      background-color: ${({ theme }) => theme.Colors.purples[2]};
      border: 2px solid ${({ theme }) => theme.Colors.grays[10]};
      padding-top: 20px;
      &:hover {
        background-color: ${({ theme }) => theme.Colors.purples[1]};
      }
    }
    & > button {
      cursor: pointer;
      display: flex;
      height: 100%;
      min-height: 30px;
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
export const StyledWebchatListSound = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > button:first-child {
    cursor: pointer;
    display: flex;
    height: 100%;
    min-height: 30px;
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
