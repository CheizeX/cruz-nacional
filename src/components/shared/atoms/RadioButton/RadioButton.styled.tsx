import styled from 'styled-components';
import { IRadioButtonProps } from './RadioButton.interface';

export const Item = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 24%;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: none;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
`;
export const RadioButton = styled.input<IRadioButtonProps>`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 0px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }

  &:not(:checked) ~ ${RadioButtonLabel} {
    background: ${({ theme }) => theme.Colors.grays[10]};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin: 3px;
      background: ${({ theme }) => theme.Colors.grays[8]};
    }
  }

  &:checked + ${RadioButtonLabel} {
    background: ${({ theme }) => theme.Colors.grays[10]};
    border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin: 3px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: ${({ theme }) => theme.Colors.purples[1]};
    }
  }
`;
