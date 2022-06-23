import styled from 'styled-components';
import { IPropsAnimation } from './WrapperNameAndDescription.interface';

export const StyledWrapperModal = styled.div`
  width: 16.2rem;
  height: 19.4rem;
  margin: auto;
  padding: 0.75rem 0.75rem 0 0.75rem;
  margin-top: 0.6rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  & > div:first-child {
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
    & > span {
      display: flex;
      text-align: start;
      align-items: center;
      justify-content: flex-start;
      padding-left: 14px;
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      line-height: 15px;
    }
  }
  & > :nth-child(2) {
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
    & span {
      display: flex;
      text-align: start;
      padding-left: 14px;
      justify-content: flex-start;
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      line-height: 15px;
    }
  }
  & > :nth-child(3) {
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > span {
      display: flex;
      text-align: start;
      align-items: center;
      padding-left: 14px;
      justify-content: flex-start;
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      line-height: 14px;
    }
    & > textarea {
      border: none;
      min-width: 232px;
      max-width: 232px;
      height: 4rem;
      max-height: 4rem;
      min-height: 4rem;
      outline: none;
      font-family: inherit;
      padding: 10px;
      color: ${({ theme }) => theme.Colors.grays[1]};
      border-radius: 15px;
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  & > :nth-child(4) {
    width: 100%;
    display: flex;
    height: 2.5rem;
    align-items: center;
    max-width: 146px;
    justify-content: space-between;
    max-width: 154px;
    padding: 0 14px;
    & > span {
      display: flex;
      text-align: start;
      align-items: center;
      justify-content: flex-start;
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      line-height: 14px;
    }
  }
`;

export const StyledBoxWrapperAnimation = styled.label`
  position: relative;
  height: 18px;
  width: 34px;
`;
export const ChackboxLabelAnimation = styled.span<IPropsAnimation>`
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
    //margin-left: ${({ isChecked }) => (isChecked === true ? '18px' : '2px')};
    background: ${({ theme, isChecked }) =>
      isChecked === true ? theme.Colors.green[4] : theme.Colors.grays[5]};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBoxAnimation = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 32px;
  height: 16px;
  &:checked + ${ChackboxLabelAnimation} {
    background-color: #e2fadb;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-left: 18px;
      transition: 0.2s;
    }
  }
`;
