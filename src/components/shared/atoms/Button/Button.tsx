import { FC, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { SVGIcon } from '../SVGIcon/SVGIcon';
import { Text } from '../Text/Text';

export enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum ButtonState {
  NORMAL = 'NORMAL',
  DISABLED = 'DISABLED',
  LOADING = 'LOADING',
}

export enum ButtonVariant {
  FILLED = 'FILLED',
  OUTLINED = 'OUTLINED',
}

export interface ButtonMoleculeProps {
  type?: 'button' | 'reset' | 'submit' | undefined;
  text: string;
  size?: Size;
  variant?: ButtonVariant;
  state?: ButtonState;
  bgColor?: string;
  leftIcon?: () => JSX.Element;
  rightIcon?: () => JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps {
  variant?: ButtonVariant;
  size: Size;
  bgColor?: string;
  $loading: boolean;
}

export const LoadingLayer = styled.div`
  position: absolute;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  & * {
    fill: ${({ theme }) => theme.Colors.grays[9]};
  }
`;

const loadingCss = css<{ bgColor?: string }>`
  & > * {
    visibility: hidden;
  }

  & > ${LoadingLayer} {
    visibility: visible;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 1;
    background-color: ${({ bgColor, theme }) =>
      bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[1]};
  }
`;

const outlineButtonStyles = css<{ bgColor?: string }>`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border: 1px solid
    ${({ bgColor, theme }) =>
      bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[3]};
  & span {
    color: ${({ theme }) => theme.Colors.purples[3]};
  }
  &:hover {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border: 1px solid
      ${({ bgColor, theme }) =>
        bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[1]};
    & span {
      color: ${({ theme }) => theme.Colors.purples[1]};
    }
  }
  &:active {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border: 1px solid
      ${({ bgColor, theme }) =>
        bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[2]};
    & span {
      color: ${({ theme }) => theme.Colors.purples[2]};
    }
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  ${({ size }) => (size === Size.SMALL ? `height: 32px;` : null)}
  ${({ size }) => (size === Size.MEDIUM ? `height: 40px;` : null)}
  ${({ size }) => (size === Size.LARGE ? `height: 48px;` : null)}
  border-radius: 24px;
  background-color: ${({ bgColor, theme }) =>
    bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[1]};
  padding: 6px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ bgColor, theme }) =>
      bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[2]};
  }
  &:active {
    background-color: ${({ bgColor, theme }) =>
      bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[1]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & > * {
    margin: 0 2px;
  }

  ${({ variant }) =>
    variant === ButtonVariant.OUTLINED ? outlineButtonStyles : null}
  ${({ $loading }) => ($loading ? loadingCss : null)}
`;

export const ButtonMolecule: FC<ButtonMoleculeProps> = ({
  text,
  type,
  size = Size.SMALL,
  variant = ButtonVariant.FILLED,
  state = ButtonState.NORMAL,
  bgColor,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      bgColor={bgColor ?? ''}
      disabled={state === ButtonState.DISABLED || state === ButtonState.LOADING}
      onClick={onClick ?? (() => {})}
      $loading={state === ButtonState.LOADING}>
      {leftIcon && leftIcon()}
      <Text
        color={
          variant === ButtonVariant.OUTLINED ? bgColor || '#8520D0' : '#FFF'
        }>
        {text}
      </Text>
      {rightIcon && rightIcon()}
      {state === ButtonState.LOADING && (
        <LoadingLayer>
          <SVGIcon color="#FFF" iconFile="/icons/button-loading.svg" />
        </LoadingLayer>
      )}
    </StyledButton>
  );
};
