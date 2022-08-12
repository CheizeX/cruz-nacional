/* eslint-disable sonarjs/no-small-switch */
import styled, { css, keyframes } from 'styled-components';
import { ITooltipProps } from './tooltip.interface';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  z-index: 1;
`;

export const TooltipTarget = styled.div<ITooltipProps>`
  border: none;
  background: inherit;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  z-index: 999;
  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`;

export const CenterContainer = styled.div<ITooltipProps>`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;
  ${({ position }) => {
    switch (position) {
      case 'top':
        return css`
          bottom: calc(100% + 5px);
          max-width: 200px;
        `;
      case 'left':
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
          max-width: 200px;
        `;
      case 'right':
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
          max-width: 200px;
        `;
      default:
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
          max-width: 200px;
        `;
    }
  }}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TooltipBox = styled.span<ITooltipProps>`
  position: relative;
  background-color: ${({ theme }) => theme.Colors.purples[3]};
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  word-break: break-word;
  word-wrap: break-word;
  z-index: 999;

  line-height: 1.3;
  font-size: ${({ theme }) => theme.fontSize[10]};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
    `}

  ${({ position }) => {
    switch (position) {
      case 'right':
        return css`
          color: #000;
        `;
      default:
        return css``;
    }
  }}

  animation: ${fadeIn} .5s linear;
  animation-fill-mode: forwards;

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.Colors.purples[3]} transparent
      transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }
  ${({ position, background }) => {
    switch (position) {
      case 'top':
        return css``;
      case 'left':
        return css`
          &:after {
            border-color: transparent transparent transparent
              ${({ theme }) => theme.Colors.purples[3]};
            ${background &&
            css`
              border-color: transparent transparent transparent ${background};
            `}
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      case 'right':
        return css`
          &:after {
            border-color: transparent ${({ theme }) => theme.Colors.purples[3]}
              transparent transparent;
            ${background &&
            css`
              border-color: transparent ${background} transparent transparent;
            `}
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `;
      default:
        return css`
          &:after {
            border-color: transparent transparent
              ${({ theme }) => theme.Colors.purples[3]} transparent;
            ${background &&
            css`
              border-color: transparent transparent ${background} transparent;
            `}
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
    }
  }}
`;
