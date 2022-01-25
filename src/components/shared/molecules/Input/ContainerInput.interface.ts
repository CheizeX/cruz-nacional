import { FC } from 'react';

export interface IContainerInputProps {
  disabled?: boolean;
  foco?: boolean;
  valid?: boolean;
  maxlength?: number;
}

export interface IContainerMoleculeProps {
  value?: string;
  disabled?: boolean;
  RightIcon?: FC;
  LeftIcon?: FC;
  placeHolder?: string;
  type?: string;
  forwardRef?: React.RefObject<HTMLInputElement>;
  valid?: boolean;
  foco?: boolean;
  required?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFocus?: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  name?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
}
