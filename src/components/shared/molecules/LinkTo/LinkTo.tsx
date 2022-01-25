/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import styled from 'styled-components';
import { Text } from '../../atoms/Text/Text';

export interface LinkToContainerProps {
  color?: string;
  colorHover?: string;
}

export interface LinkToMoleculeProps {
  color?: string;
  text: string;
  href?: string;
}

const StyledLinkToMolecule = styled.span<LinkToContainerProps>`
  color: ${({ color, theme }) =>
    color && color !== '' ? color : theme.Colors.grays[1]};
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-between;
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: ${({ color, theme }) =>
    color && color !== '' ? color : theme.Colors.grays[1]};
  &:hover {
    cursor: pointer;
    color: ${({ colorHover, theme }) =>
      colorHover && colorHover !== '' ? colorHover : theme.Colors.grays[1]};
  }
`;

export const LinkToMolecule: FC<LinkToMoleculeProps> = ({
  color,
  text,
  href,
}) => {
  return (
    <StyledLinkToMolecule color={color}>
      <a
        target="_blank"
        href={href && href !== '' ? href : '#'}
        rel="noreferrer">
        <Text>{text}</Text>
      </a>
    </StyledLinkToMolecule>
  );
};
