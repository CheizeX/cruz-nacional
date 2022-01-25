import React, { FC } from 'react';
import { IRadioMolecule } from './RadioButton.interface';
import { Item, RadioButton, RadioButtonLabel } from './RadioButton.styled';

export const Radio: FC<IRadioMolecule> = ({
  value,
  disabled,
  name,
  checked,
  onChange,
  forwardRef = null,
}) => {
  return (
    <Item>
      <RadioButton
        ref={forwardRef}
        type="radio"
        name={name ?? ''}
        disabled={disabled ?? false}
        value={value}
        onChange={onChange}
        checked={checked === `${value}`}
      />
      <RadioButtonLabel />
    </Item>
  );
};
