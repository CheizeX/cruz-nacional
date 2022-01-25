import { FC, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { SVGIcon } from '../SVGIcon/SVGIcon';

export enum IconButtonState {
  NORMAL = 'NORMAL',
  DISABLED = 'DISABLED',
  LOADING = 'LOADING',
}

export enum IconButtonVariant {
  FILLED = 'FILLED',
  OUTLINED = 'OUTLINED',
}

export interface IconButtonMoleculeProps {
  state?: IconButtonState;
  bgColor?: string;
  color?: string;
  Icon?: () => JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  small?: boolean;
  large?: boolean;
  value?: string;
}

export interface IconButtonProps {
  bgColor?: string;
  $loading: boolean;
  small?: boolean;
  large?: boolean;
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
    background-color: ${({ bgColor, theme }) =>
      bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[1]};
    opacity: 1;
  }
`;

export const StyledIconButton = styled.button<IconButtonProps>`
  position: relative;
  min-height: ${({ theme }) => theme.iconButtonSizes.medium};
  height: 0px;
  border-radius: 24px;
  background-color: ${({ bgColor, theme }) =>
    bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[1]};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  & > div {
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      & > svg {
        width: 50%;
        height: 50%;
        & > path {
          ${({ color }) => color && `fill: ${color}`};
        }
      }
    }
  }

  &:hover {
    background-color: ${({ bgColor, theme }) =>
      bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[2]};
    opacity: 0.85;
  }

  &:active {
    background-color: ${({ bgColor, theme }) =>
      bgColor && bgColor !== '' ? bgColor : theme.Colors.purples[1]};
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${({ small }) =>
    small &&
    css<IconButtonProps>`
      min-height: ${({ theme }) => theme.iconButtonSizes.small};
    `}

  ${({ large }) =>
    large &&
    css<IconButtonProps>`
      min-height: ${({ theme }) => theme.iconButtonSizes.large};
    `}

   ${({ $loading }) => ($loading ? loadingCss : null)}
`;

export const IconButtonMolecule: FC<IconButtonMoleculeProps> = ({
  state = IconButtonState.NORMAL,
  bgColor,
  color,
  Icon,
  onClick,
}) => (
  <StyledIconButton
    bgColor={bgColor ?? ''}
    color={color ?? ''}
    disabled={
      state === IconButtonState.DISABLED || state === IconButtonState.LOADING
    }
    onClick={onClick ?? (() => {})}
    $loading={state === IconButtonState.LOADING}>
    {(Icon && Icon()) || <SVGIcon iconFile="icons/paper_plane.svg" />}
    {state === IconButtonState.LOADING && (
      <LoadingLayer>
        <SVGIcon color="#FFF" iconFile="/icons/button-loading.svg" />
      </LoadingLayer>
    )}
  </StyledIconButton>
);
