import React from 'react';

export enum TooltipPosition {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}
export interface ITooltipProps {
  position?: TooltipPosition;
  text?: string;
  children?: React.ReactNode;
  background?: string;
  styleMe?: boolean;
  showOnFocus?: boolean;
}
