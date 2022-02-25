import styled from 'styled-components';
import { IAvatarProps } from './AvatarContainer.interface';

export const StyledAvatarContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  width: 19rem;
  margin-top: 0.6rem;
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    position: relative;
    border-radius: 10px;
    width: 16.3rem;
    margin: auto;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    max-height: 15rem;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    & > div {
      margin: 0.6rem 0.3rem;
      justify-content: center;
      display: flex;
      padding: 0.1rem 0.4rem 0 0.4rem;
    }
  }
`;
export const WrapperAvatar = styled.button<IAvatarProps>`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0px 7px
    ${({ theme, focused }) => (focused ? theme.Colors.grays[5] : 'transparent')};
  & img {
    max-width: 3rem;
    max-height: 3rem;
    object-fit: cover;
    border-radius: 10px;
  }
  & > div {
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background: ${({ theme }) => theme.Colors.grays[10]};
    & * {
      & > svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;
export const StyledSectionPhoto = styled.div`
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
