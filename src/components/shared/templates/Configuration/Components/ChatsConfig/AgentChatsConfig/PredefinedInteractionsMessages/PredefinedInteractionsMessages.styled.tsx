/* eslint-disable sonarjs/no-small-switch */
import styled, { css, keyframes } from 'styled-components';
import { ITooltipProps } from '../../../../../../atoms/Tooltip/tooltip.interface';
import { IPropsContainerResponse } from './PredefinedInteractionsMessages.interface';

export const WrapperPredefinedInteractionsMessages = styled.div`
  background: ${({ theme }) => theme.Colors.grays[10]};
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

export const HeaderPredefinedInteractionsMessages = styled.div`
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

export const BodyPredefinedInteractionsMessages = styled.div`
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
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > div {
      max-width: 15rem;
    }
    & > button {
      cursor: pointer;
      & > div {
        max-width: 38px;
      }
    }
  }
  & > :nth-child(3) {
    height: 164px;
    display: flex;
    margin-bottom: 4px;
    & > span {
      & > div {
        & * {
          & > svg {
            width: 28px;
            height: 28px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
          }
        }
      }
    }
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

export const StyledTextArea = styled.textarea`
  width: 362px;
  min-height: 80px;
  height: 100%;
  outline: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  border: none;
  resize: none;
  padding: 10px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;
  color: ${({ theme }) => theme.Colors.grays[4]};
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.Colors.grays[7]};
    padding: 0 10px;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    color: ${({ theme }) => theme.Colors.grays[5]};
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.Colors.purples[1]};
  }
`;

export const ContainerPredefinedMessage = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  height: fit-content;
  width: 420px;
  z-index: 3;
  & > :first-child {
    align-items: center;
    background: none;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    height: 55px;
    justify-content: space-between;
    padding: 21px;
    width: 100%;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 20px;
    }
    & button {
      height: 13px;
      width: 13px;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[6]};
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  & > :nth-child(2) {
    padding: 0 12px;
    margin: 20px 0;
    height: 100%;
    // max-height: 220px;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    & > :nth-child(1) {
      & > div {
        height: 58px;
        display: flex;
        & > div {
          width: 21rem;
        }
        & > button {
          cursor: pointer;
        }
      }
      & > button {
        width: 30px;
        & > div {
          & > * {
            & > svg {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
    & > :nth-child(1) {
      padding: 0 10px;
    }
    & > :nth-child(2) {
      width: 20rem;
      padding: 0 10px;
    }
    & > :nth-child(3) {
      display: grid;
      padding: 0 10px;
      overflow-y: scroll;
      max-height: 340px;
      &::-webkit-scrollbar {
        display: none;
      }
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        min-height: 40px;
        width: 100%;
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        border-radius: 10px;
        & > * {
          & > button {
            width: 30px;
            height: 40px;
            cursor: pointer;
            & > div {
              & > div {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 40px;
                & * {
                  & > svg {
                    width: 18px;
                    height: 18px;
                  }
                }
              }
            }
          }
        }
        & > span {
          color: ${({ theme }) => theme.Colors.grays[3]};
        }
      }
      & > :nth-child(2n) {
        border-radius: 10px;
        background: ${({ theme }) => theme.Colors.grays[10]};
      }
    }
    & > div {
      & > span {
        color: ${({ theme }) => theme.Colors.purples[2]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        width: 100%;
        margin: 0px 0 0px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 12px;
      }
    }
  }
  & > :nth-child(3) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    margin-bottom: 20px;
  }
`;

export const StyledListPredefinedResponse = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
  max-height: 200px;
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div {
    min-height: 40px;
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    & > div {
      & > span {
        display: flex;
        max-width: 200px;
        height: 100%;
        align-items: center;
        padding-left: 20px;
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
    }
    & > button {
      width: 30px;
      cursor: pointer;
      & > div {
        & * {
          display: flex;
          align-items: center;
        }
      }
    }
  }
  & > :nth-child(2n) {
    border-radius: 10px;
    display: flex;
    width: 100%;
    min-height: 40px;
    background: ${({ theme }) => theme.Colors.grays[10]};
  }
`;
export const ContainerEmplyResponse = styled.div`
  & > div {
    width: 100%;
    min-width: 295px;
    display: flex;
    height: 100%;
    & span {
      & > div {
        margin: 4px auto;
        & * {
          & > svg {
            width: 28px;
            height: 28px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
          }
        }
      }
    }
  }
`;

export const StyledButtonEdit = styled.button`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 40px;
  & > div {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.purples[3]};
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg {
      fill: ${({ theme }) => theme.Colors.grays[10]};
      width: 18px;
      height: 18px;
    }
  }
`;

export const ContainerBoxHovered = styled.div<
  ITooltipProps & IPropsContainerResponse
>`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: end;
  align-items: end;
  top: ${({ y }) => y && y - 20}px;
  left: ${({ x }) => x}px;
  pointer-events: none;
  max-width: 200px;
  bottom: calc(100% + 5px);
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TooltipBox = styled.span<ITooltipProps>`
  position: relative;
  background-color: ${({ theme }) => theme.Colors.purples[3]};
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  word-break: break-word;
  word-wrap: break-word;
  z-index: 999;
  line-height: 1.3;
  font-size: ${({ theme }) => theme.fontSize[10]};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
    `}

  animation: ${fadeIn} .5s linear;
  animation-fill-mode: forwards;

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.Colors.purples[3]} transparent
      transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }
`;

export const WrapperListMessage = styled.div`
  width: 100%;
  height: 100%;
`;
