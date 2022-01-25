/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import styled from 'styled-components';

export interface BadgeMoleculeProps {
  bgColor?: string;
  leftIcon?: () => JSX.Element;
  rightIcon?: () => JSX.Element;
}

export interface BadgeContainerProps {
  bgColor?: string;
}

const StyledBadgeMolecule = styled.div<BadgeContainerProps>`
  height: 25px;
  width: max-content;
  border-radius: 12.5px;
  background-color: ${({ bgColor, theme }) =>
    bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[1]};
  padding: 5.5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & > * {
    padding: 0 2px;
  }
`;

export const BadgeMolecule: FC<BadgeMoleculeProps> = ({
  bgColor,
  leftIcon,
  children,
  rightIcon,
}) => {
  return (
    <StyledBadgeMolecule bgColor={bgColor ?? ''}>
      {leftIcon && leftIcon()}
      {children}
      {rightIcon && rightIcon()}
    </StyledBadgeMolecule>
  );
};
