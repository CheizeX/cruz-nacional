import React, { FC, useState } from 'react';
import { InputMolecule } from './Input';
import { StyledDiv } from './ContainerInput.styled';
import { IContainerMoleculeProps } from './ContainerInput.interface';

export const ContainerInput: FC<IContainerMoleculeProps> = ({
  disabled,
  RightIcon,
  LeftIcon,
  placeHolder,
  type,
  forwardRef = null,
  valid,
  onClick,
  onChange,
  value,
  name,
  onBlur,
  onKeyPress,
  maxLength,
}) => {
  const [foco, setFocus] = useState(false);

  return (
    <StyledDiv valid={valid ?? true} foco={foco} disabled={disabled ?? false}>
      <button
        type="button"
        disabled={disabled ?? false}
        onClick={onClick ?? (() => {})}>
        {RightIcon && <RightIcon />}
      </button>
      <InputMolecule
        valid={valid ?? true}
        placeHolder={placeHolder ?? ''}
        type={type ?? ''}
        disabled={disabled ?? false}
        forwardRef={forwardRef}
        foco={foco}
        name={name}
        value={value}
        setFocus={setFocus}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        maxLength={maxLength}
      />
      <button
        type="button"
        disabled={disabled ?? false}
        onClick={onClick ?? (() => {})}>
        {LeftIcon && <LeftIcon />}
      </button>
    </StyledDiv>
  );
};
