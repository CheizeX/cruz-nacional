import styled from 'styled-components';
import { StyledClientAndAgentAvatars } from '../PendingsChatItem/PendingsChatItem.styles';

export const StyledDialoguesContainer = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 65px;
  max-height: 600px;
  display: block;
  flex-direction: column;
  height: 500px;
  overflow-y: scroll;
  transition: all 1s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledUserDialogue = styled.div`
  min-height: 65px;
  max-width: 380px;
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  width: 49%;
  margin: 5px 0;
  transition: all 1s ease;

  & > :first-child {
    display: flex;
    flex-direction: column;
    transition: all 1s ease;
    * {
      font-size: 12px;
    }
    & > :first-child {
      border-radius: 0px 10px 10px 10px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[1]};
      padding: 14px 15px;
      font-weight: 400;
      height: fit-content;
      display: flex;
      flex-direction: row-reverse;
      transition: all 1s ease-in-out;
      overflow: hidden;
      & > img {
        max-width: 100px;
        object-fit: contain;
        max-height: 100px;
        box-shadow: 0 0px 10px ${({ theme }) => theme.Colors.grays[6]};
        padding: 3px;
        border-radius: 10px;
      }
      & article {
        transition: all 1s ease-in-out;
        z-index: 1;
        background-color: ${({ theme }) => theme.Colors.grays[1]};
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: bottom;
        border-radius: 10px;
        box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.199);
        overflow: scroll;
        opacity: 1;
        padding-top: 50px;
        transition: all 1s ease-in-out;
        &::-webkit-scrollbar {
          display: none;
        }
        & > img {
          position: absolute;
          top: 20px;
          width: 90%;
          height: max-content;
          object-fit: contain;
        }
      }
      & > button {
        transition: all 1s ease-in-out;
        z-index: 2;
        position: absolute;
        top: 10px;
        right: 13px;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          cursor: pointer;
          & div {
            & * {
              fill: ${({ theme }) => theme.Colors.purples[2]};
            }
          }
        }
        & div {
          & * {
            width: 100%;
            height: 100%;
            fill: ${({ theme }) => theme.Colors.grays[10]};
          }
        }
      }
      & > div {
        width: 30px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 10px;
        border-left: 2px dashed ${({ theme }) => theme.Colors.grays[8]};
        & > button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 25px;
          width: 25px;
          margin-left: 10px;
          fill: ${({ theme }) => theme.Colors.grays[8]};
          color: ${({ theme }) => theme.Colors.grays[8]};
          & :hover {
            color: ${({ theme }) => theme.Colors.purples[2]};
            fill: ${({ theme }) => theme.Colors.purples[2]};
            cursor: pointer;
          }
          & * {
            height: 95%;
            width: 95%;
          }
        }
      }
      & > button {
        cursor: pointer;
        & > div {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 35px;
          left: 3px;
        }
      }
    }
    & > :last-child {
      color: ${({ theme }) => theme.Colors.grays[5]};
      padding: 10px;
      font-weight: 400;
    }
  }
`;

export const StyledBoxAvatar = styled.img`
  width: 30px;
  height: 30px;
  max-width: 1.9rem;
  max-height: 1.9rem;
`;

export const StyledAgentOrSUpervisorDialogue = styled.div`
  min-height: 65px;
  max-height: fit-content;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  & > :first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 90%;
    * {
      font-size: 12px;
    }
    & > :nth-child(1) {
      word-wrap: break-word;
      border-radius: 10px 0px 10px 10px;
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      padding: 14px 15px;
      font-weight: 400;
      max-width: 100%;
      display: flex;
      overflow: hidden;
      & > div {
        height: 35px;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        border-right: 2px dashed ${({ theme }) => theme.Colors.grays[8]};
        margin-right: 10px;
        & img {
          position: absolute;
          top: 0px;
          width: 90%;
          object-fit: contain;
          height: 100%;
        }
        & button {
          height: 20px;
          padding-right: 10px;
          &:hover {
            cursor: pointer;
            & * {
              fill: ${({ theme }) => theme.Colors.grays[5]};
              color: ${({ theme }) => theme.Colors.grays[5]};
            }
          }
          & svg {
            height: 20px;
            width: 20px;
          }
        }
        & * {
          fill: white;
        }
      }
      & > img {
        max-width: 100px;
        object-fit: contain;
        max-height: 100px;
        box-shadow: 0 0px 10px ${({ theme }) => theme.Colors.grays[10]};
        padding: 3px;
        border-radius: 10px;
      }
      & article {
        transition: all 1s ease-in-out;
        z-index: 1;
        background-color: ${({ theme }) => theme.Colors.grays[1]};
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.199);
        overflow: scroll;
        opacity: 1;
        padding-top: 50px;
        transition: all 1s ease-in-out;
        &::-webkit-scrollbar {
          display: none;
        }
        & img {
          position: absolute;
          top: 0px;
          width: 90%;
          object-fit: contain;
          height: 100%;
        }
      }

      & > button {
        transition: all 1s ease-in-out;
        z-index: 2;
        position: absolute;
        top: 10px;
        right: 13px;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          cursor: pointer;
          & div {
            & * {
              fill: ${({ theme }) => theme.Colors.purples[2]};
            }
          }
        }
        & div {
          & * {
            width: 100%;
            height: 100%;
            fill: ${({ theme }) => theme.Colors.grays[10]};
          }
        }
      }
    }
    & > :nth-child(2) {
      & span {
        color: ${({ theme }) => theme.Colors.grays[1]};
        padding-right: 10px;
        padding-left: 75px;
        font-weight: 400;
      }
      margin-top: 5px;
      margin-bottom: 15px;
    }
  }
`;

export const StyledAgentAvatar = styled(StyledClientAndAgentAvatars)`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  & > :first-child {
    & svg {
      background-color: ${({ theme }) => theme.Colors.grays[8]};
      width: 30px;
      height: 30px;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[7]};
      }
    }
  }
`;

export const StyledUserPendingDialogue = styled.div`
  min-height: 65px;
  max-width: 380px;
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  width: 49%;
  margin: 5px 0;
  transition: all 1s ease;

  & > div {
    display: flex;
    flex-direction: column;
    transition: all 1s ease;
    * {
      font-size: 12px;
    }
    & > :first-child {
      border-radius: 0px 10px 10px 10px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      color: ${({ theme }) => theme.Colors.grays[1]};
      padding: 14px 15px;
      font-weight: 400;
      height: fit-content;
      display: flex;
      flex-direction: row-reverse;
      transition: all 1s ease-in-out;
      overflow: hidden;

      & button {
        transition: all 1s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          cursor: pointer;
          & div {
            & * {
              fill: ${({ theme }) => theme.Colors.purples[2]};
            }
          }
        }
        & div {
          & * {
            width: 100%;
            height: 100%;
            fill: ${({ theme }) => theme.Colors.grays[8]};
          }
        }
      }

      & > button {
        cursor: pointer;
        & > div {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 35px;
          left: 3px;
        }
      }
    }
    & > :last-child {
      color: ${({ theme }) => theme.Colors.grays[5]};
      padding: 10px;
      font-weight: 400;
    }
  }
`;
