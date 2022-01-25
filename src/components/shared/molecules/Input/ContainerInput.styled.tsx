import styled from 'styled-components';
import { IContainerInputProps } from './ContainerInput.interface';

export const StyledDiv = styled.div<IContainerInputProps>`
  opacity: ${({ disabled }) => (disabled && disabled === true ? 0.9 : 'none')};
  background: ${({ theme }) => theme && theme.Colors.grays[9]};
  width: 100%;
  height: 2.5rem;
  padding: 10px 12px 12px 10px;
  min-width: 13rem;
  border-radius: 24px;
  display: flex;
  justify-content: space-around;
  box-shadow: inset 0 0 0 1px
    ${({ theme, valid }) =>
      theme && valid === true ? 'current' : theme.Colors.orange[1]};
  box-shadow: inset 0 0 0 2px
    ${({ theme, foco }) =>
      theme && foco === true ? theme.Colors.purples[1] : 'none'};
  & > button {
    padding-left: ${({ theme }) => theme && theme.fontSize[10]};
    padding-right: ${({ theme }) => theme && theme.fontSize[10]};
    & > div {
      height: ${({ theme }) => theme && theme.fontSize[16]};
      & > div {
        cursor: ${({ disabled }) =>
          disabled && disabled === true ? '' : 'pointer'};
        & > svg {
          :hover {
            width: ${({ disabled, theme }) =>
              disabled && disabled === true ? '' : theme.fontSize[18]};
          }
        }
      }
    }
  }
`;
