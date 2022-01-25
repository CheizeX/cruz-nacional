import React, { FC } from 'react';
import { StyledInputMolecules } from './Input.styled';
import { IInputMoleculeProps } from './Input.interface';

export const InputMolecule: FC<IInputMoleculeProps> = ({
  placeHolder,
  type,
  disabled,
  foco,
  forwardRef = null,
  setFocus,
  onChange,
  value,
  name,
  maxLength,
  onKeyPress,
}) => {
  return (
    <StyledInputMolecules
      placeholder={placeHolder ?? ''}
      type={type ?? ''}
      disabled={disabled ?? false}
      ref={forwardRef}
      foco={foco ?? false}
      name={name}
      value={value}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onChange={onChange}
      onKeyPress={onKeyPress}
      maxLength={maxLength}
    />
  );
};
