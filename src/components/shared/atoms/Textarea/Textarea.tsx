import styled from 'styled-components';
import { ITextarea } from './Textarea.interface';

export const Textarea = styled.textarea<ITextarea>`
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 15px;
  color: ${({ theme }) => theme.Colors.grays[1]};
  font-size: ${({ theme }) => theme.fontSize[10]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  height: 90px;
  line-height: 10px;
  min-width: 303px;
  outline: none;
  padding: 10px;
  font-family: inherit;
  resize: none;
`;
