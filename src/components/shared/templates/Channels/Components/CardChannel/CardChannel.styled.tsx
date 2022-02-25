import styled from 'styled-components';
import { IContainerCard } from './CardChannel.interface';

export const StyledCardChannel = styled.div`
  width: 309px;
  height: 144px;
  border-radius: 10px;
  margin: 13px 0 0px 13px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  // padding: 16px 16px 14px 14px;
  & > :first-child {
    display: flex;
    height: 92px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[8]};
    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      margin: 16px 0 0 16px;
      align-items: center;
      justify-content: center;
      & > :nth-child(1) {
        color: ${({ theme }) => theme.Colors.grays[1]};
        font-size: ${({ theme }) => theme.fontSize[14]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        line-height: 1rem;
        width: 100%;
      }
      & > :nth-child(2) {
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        font-weight: ${({ theme }) => theme.fontWeight[400]};
        line-height: 14px;
      }
    }
    & > :nth-child(3) {
      display: flex;
      width: 100%;
      max-width: 100px;
      justify-content: center;
      padding-top: 16px;
      min-height: 40px;
      max-height: 40px;
      & > div {
        width: 55px;
        display: flex;
        & > :nth-child(2) {
          width: 18px;
          margin-left: 8px;
          cursor: pointer;
          & > div {
            & * {
              & > svg {
                width: 6px;
                height: 22px;
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[6]};
                }
              }
            }
          }
        }
      }
      & > div {
        & > :nth-child(3) {
          z-index: 1;
          display: flex;
          position: relative;
          right: 20px;
          top: 4px;
          width: 100%;
          height: 100%;
          & > div {
            position: absolute;
            right: -20px;
            top: 20px;
          }
        }
      }
    }
  }
  & > :last-child {
    height: 52px;
    display: flex;
    align-items: center;
    padding: 0 17px;
    display: flex;
    justify-content: space-between;
    & > div {
      & > span {
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        line-height: 14px;
      }
    }
  }
`;
export const StyledPicture = styled.div`
  display: flex;
  margin: 16px 0 0 16px;
  min-width: 64px;
  position: relative;
  & > :nth-child(1) {
    width: 57px;
    height: 57px;
    background: ${({ theme }) => theme.Colors.blue[1]};
    border-radius: 50%;
    position: relative;
    & img {
      font-size: 10px;
      max-width: 57px;
      max-height: 57px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  & > :nth-child(2) {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 40px;
    top: 30px;
    & > div {
      & > * {
        & > svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

export const StyledBoxWrapper = styled.label`
  position: relative;
`;

export const CheckBoxLabel = styled.span<IContainerCard>`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 16px;
  border-radius: 15px;
  background: ${({ theme, isChecked }) =>
    isChecked === true ? '#e2fadb' : theme.Colors.grays[8]};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 1px;
    margin-left: ${({ isChecked }) => (isChecked === true ? '18px' : '3px')};
    background: ${({ theme, isChecked }) =>
      isChecked === true ? theme.Colors.green[4] : theme.Colors.grays[5]};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 32px;
  height: 16px;
  &:checked + ${CheckBoxLabel} {
    background-color: #e2fadb;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-left: 2px;
      transition: 0.2s;
    }
  }
`;

export const DropdownContainerCard = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 6px 6px;
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

export const StyledWhatsApp360 = styled.div`
  display: flex;
  & > div {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & img {
    max-width: 74px;
    max-height: 74px;
    object-fit: cover;
  }
  & svg {
    z-index: 2;
  }
`;
export const StyledFacebookService = styled.div`
  & > div {
    border-radius: 0.3125rem;
    background-color: #1877f2;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 28px;
    height: 28px;
    & > span {
      font-family: 'tahoma';
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 14px;
      letter-spacing: 0.4px;
    }
  }
`;

export const StyledLogoInstagram = styled.div`
  display: flex;
  & > div {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & img {
    max-width: 74px;
    max-height: 74px;
    object-fit: cover;
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
  & svg {
    z-index: 2;
  }
`;

export const StyledLogoWebChat = styled.div`
  display: flex;
  & > div {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & img {
    max-width: 44px;
    max-height: 44px;
    object-fit: cover;
  }
  & svg {
    z-index: 2;
  }
`;
export const LogoWassenger = styled.div`
  display: flex;
  & img {
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
    width: 100%;
  }
`;
