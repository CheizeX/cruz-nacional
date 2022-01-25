import styled from 'styled-components';
import { IInputProps } from './Input.interface';

export const StyledInputMolecules = styled.input<IInputProps>`
  color: ${({ theme }) => theme && theme.Colors.grays[1]};
  border: ${({ theme }) => theme && theme.Colors.grays[5]};
  border-radius: 80px;
  margin: 0px;
  width: 90%;
  opacity: ${({ disabled }) => (disabled && disabled === true ? 0.9 : 'none')};
  background: ${({ theme }) => theme && theme.Colors.grays[9]};
  outline: none;
  &:-webkit-autofill {
    & {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
  }
  & > input {
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
  }
  &:disabled {
    cursor: not-allowed;
  }
  ::placeholder {
    color: ${({ theme }) => theme && theme.Colors.grays[5]};
    font-size: ${({ theme }) => theme.fontSize[14]};
  }
`;
