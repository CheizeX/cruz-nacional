import styled, { css } from 'styled-components';
import { IPropsWebchatColorPicker } from './WebchatColorPicker.interface';

export const StyledColorPickerContainer = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 340px;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0;
  & > span {
    color: ${({ theme }) => theme.Colors.purples[2]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    padding-bottom: 0px;
    padding-left: 20px;
  }
  & > button {
    min-height: 40px;
    margin: 0 16px;
    margin-top: 42px;
    & > span {
      font-weight: ${({ theme }) => theme.fontWeight[400]};
    }
  }
`;

export const StyledWebchatColorPickerWrapper = styled.div`
  width: 100%;
  max-height: 150px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0px 10px;
  margin-top: 0rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 10px;
    width: 100%;
    & > :nth-child(2) {
      display: flex;
      height: 40px;
      justify-content: space-between;
      & > button {
        display: flex;
        justify-content: center;
        width: 100px;
      }
    }
  }
`;
export const StyledWebchatColorPickerHeader = styled.div`
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
      & > div {
        & > svg {
          border-radius: 50%;
          width: 18px;
          height: 18px;
          & > path {
            fill: ${({ theme }) => theme.Colors.purples[3]};
          }
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
export const StyledWebchatColorPickerTag = styled.svg<IPropsWebchatColorPicker>`
  fill: none;
  stroke: ${({ theme }) => theme.Colors.grays[9]};
  stroke-width: 3px;
  height: 35px;
  width: 35px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;
export const StyledWebchatColorPickerCustomColor = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & > :first-child {
    height: 9.2rem;
  }
  & > :nth-child(2) {
    position: absolute;
    top: 0px;
    right: -3px;
    display: flex;
    justify-content: center;
    max-height: 40px;
    align-items: center;
    flex-direction: column;
    min-height: 50px;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[7]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 0.8rem;
      margin-right: 0.5rem;
    }
    & > div {
      display: flex;
      padding: 0.3rem;
      background: ${({ theme }) => theme.Colors.grays[9]};
      border-radius: 20px;
      width: 7rem;
      border: 20%;
      justify-content: center;
      align-items: center;
      & > input {
        outline: none;
        background: ${({ theme }) => theme.Colors.grays[9]};
        border: none;
        width: 6.5rem;
        text-align: center;
      }
    }
  }
  & > :last-child {
    position: absolute;
    bottom: 0px;
    right: -1px;
    display: flex;
    justify-content: space-between;
    & > button {
      min-height: 80px;
      max-width: 112px;
      text-align: center;
      border-radius: 20px;
      border-width: 2px;
    }
  }
`;
export const StyledStyledWebchatColorPickerByColor = styled.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;

export const StyledWebchatColorPickerWrapperColor = styled.div<IPropsWebchatColorPicker>`
  ${({ secondaryColor, primaryColor }) => `background: linear-gradient(
    115deg,
    ${primaryColor} 0%,
    ${secondaryColor} 100%
  ) `};
  border-radius: 2px;
  margin: 8px 5px;
  display: inline-block;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  & :hover {
    cursor: pointer;
  }
  ${({ checked }) =>
    !checked &&
    css`
      & svg {
        & polyline {
          display: none;
        }
      }
    `}
`;

export const StyledButonOneOrTwoWrapper = styled.div`
  width: 100%;
  margin: 5px 0 0px 0px;
  padding: 0 5px;
  & > button {
    background: none;
    min-width: 48%;
    padding: 2px;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    border-style: dotted;
    & > span {
      color: ${({ theme }) => theme.Colors.purples[2]};
      line-height: 15px;
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
`;
export const StyledWebchatIsAnimatedOrNot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 5px auto;
  padding: 0 0px 5px 4px;
  text-align: center;
  & > span {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
`;
