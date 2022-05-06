import styled from 'styled-components';
import { IPropsContactForm } from './ContactForm.interface';

export const StyledButtonContactForm = styled.button`
  position: absolute;
  top: 0;
  right: -22px;
  display: flex;
  min-width: 45px;
  height: 34px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.Colors.blue[2]};
  border-bottom-left-radius: 10px;
  fill: black;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  & :hover {
    color: ${({ theme }) => theme.Colors.grays[5]};
  }
  & :active {
    color: ${({ theme }) => theme.Colors.grays[6]};
  }
  & > svg {
    width: 26px;
    height: 26px;
    z-index: 2;
  }
`;
export const StyledContactFormContainer = styled.div<IPropsContactForm>`
  transition: all 0.2s ease;
  position: absolute;
  padding-top: 0;
  padding-left: 10px;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 300px;
  height: 100%;
  overflow: hidden;
  border-end-start-radius: 10px;

  ${({ showContact }) =>
    !showContact &&
    `
    width: 0px;
  `}
  & > span {
    padding-left: 20px;
    width: 100%;
    color: ${({ theme }) => theme.Colors.grays[3]};
    overflow: hidden;
    max-height: 30px;
    min-height: 30px;
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 17px;
    display: flex;
    align-items: flex-end;
  }
  & > div {
    padding: 8px 0;
    width: 100%;
    min-height: fit-content;
    max-width: 270px;
  }
  & > button {
    margin-top: 18px;
  }
  & > :first-child {
    margin-top: 10px;
  }
  & > :nth-child(12) {
    height: 2.5rem;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    align-items: center;
    display: flex;
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    padding-left: 20px;
  }
  & > :nth-child(14) {
    & > button {
      width: 30px;
      height: 30px;
      margin-left: 10px;
      margin-bottom: 16px;
      cursor: pointer;
      & :hover {
        & > div {
          & * {
            & > svg {
              width: 34px;
              height: 34px;
            }
          }
        }
      }
      & > div {
        & > div {
          & * {
            & > svg {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
  }
`;
