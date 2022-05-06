import styled from 'styled-components';

export interface TextProps {
  color?: string;
  size?: string;
  weight?: string;
  family?: string;
  lineThrough?: boolean;
}

export const Text = styled.span<TextProps>`
  color: ${({ color, theme }) => color ?? theme.Colors.grays[10]};
  font-family: ${({ family, theme }) => family ?? theme.font};
  font-size: ${({ size, theme }) => size ?? theme.fontSize[14]};
  font-weight: ${({ weight, theme }) => weight ?? theme.fontWeight[600]};
  line-height: 20px;
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? 'line-through' : 'none'};
`;
