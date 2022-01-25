import { FC } from 'react';
import styled, { css } from 'styled-components';

export interface CheckboxProps {
  isTransparent?: boolean;
  checked?: boolean;
  mode?: string;
  onClick: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

// svg check item
const Icon = styled.svg`
  fill: none;
  height: ${({ theme }) => theme.fontSize[20]};
  stroke: ${({ theme }) => theme.Colors.grays[10]};
  stroke-width: 3.8px;
  width: ${({ theme }) => theme.fontSize[22]};
`;

const StyledCheckbox = styled.div<CheckboxProps>`
  background: ${({ checked, theme }) =>
    checked ? theme.Colors.purples[1] : theme.Colors.grays[5]};
  border-radius: 3px;
  display: inline-block;

  // *** si recibe la prop isTransparent ***
  ${(props) =>
    props.isTransparent &&
    css<CheckboxProps>`
      background: ${({ theme, checked }) =>
        checked ? theme.Colors.grays[10] : theme.Colors.grays[10] + 70};
      & > svg {
        stroke: ${({ theme, checked }) =>
          checked ? theme.Colors.purples[3] : theme.Colors.grays[10] + 80};
      }
    `}
`;

export const Checkbox: FC<CheckboxProps> = ({
  onClick,
  checked = false,
  isTransparent = false,
}) => {
  return (
    <StyledCheckbox
      isTransparent={isTransparent}
      checked={checked}
      onClick={onClick}
      data-testid="styledcheckbox">
      <Icon viewBox="-2 -4 28 28">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  );
};
