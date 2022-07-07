import styled from 'styled-components';
import { IWebchatAvatarProps } from './WebchatAvatar.interface';

export const StyledWebchatAvatarContainer = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 20px;
`;
export const StyledWebchatAvatarHeader = styled.div`
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
  & > svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.Colors.grays[1]};
  }
`;
export const StyledWebchatAvatarBody = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  position: relative;
  border-radius: 10px;
  padding: 10px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 15rem;
  overflow: scroll;
  gap: 0.35rem;
  width: 95%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const WrapperWebchatAvatar = styled.button<IWebchatAvatarProps>`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0px 5px
    ${({ theme, focused }) =>
      focused ? theme.Colors.grays[1] : 'transparent'};
  border-radius: 50%;
  & img {
    max-width: 100%;
    max-height: 100%;
    border: 1px solid red;
    object-fit: cover;
    border-radius: 15px;
  }
  & > div {
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background: ${({ theme }) => theme.Colors.grays[10]};
    overflow: hidden;
    & * {
      & > svg {
        width: 100%
        height: 100%;
      }
    }
  }
`;
export const StyledWebchatAvatarSectionPhoto = styled.div`
  & > div {
    margin: 10px auto;
    width: 8.2rem;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    height: 3rem;
    border: 1px dashed ${({ theme }) => theme.Colors.purples[3]};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    position: relative;
    & > span {
      color: ${({ theme }) => theme.Colors.purples[3]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      font-size: ${({ theme }) => theme.fontSize[10]};
      line-height: 14px;
      margin-left: 8px;
    }
    & > input {
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      cursor: pointer;
      height: 3.5rem;
      top: -20px;
      position: absolute;
    }
    & > :nth-child(2) {
      & * {
        & > svg {
          width: 2rem;
          height: 2rem;
          & > path {
            fill: ${({ theme }) => theme.Colors.purples[3]};
          }
        }
      }
    }
    & > :nth-child(3) {
      top: 8px;
      left: -4px;
      width: fit-content;
      height: 0.5rem;
      & * {
        & > svg {
          width: 1rem;
          height: 1rem;
          border: 2px solid white;
          border-radius: 50%;
          fill: ${({ theme }) => theme.Colors.purples[3]};
        }
      }
    }
  }
`;
