import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ContainerInput } from './ContainerInput';
import { InputMolecule } from './Input';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { IInputProps } from './Input.interface';

export default {
  title: 'Ailalia/Molecules/Input',
  component: InputMolecule,
  argTypes: {
    placeholder: { control: 'text' },
    widthInRem: { control: 'number' },
    type: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<
  IInputProps & {
    widthInRem?: string;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    valid?: boolean;
    darkMode?: boolean;
    foco: boolean;
    setFocus: React.Dispatch<React.SetStateAction<boolean>>;
    onClick: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  }
> = ({
  widthInRem = 40,
  placeholder = 'Search',
  type = 'text',
  disabled = false,
  valid = true,
}) => (
  <div style={{ width: `${widthInRem}rem` }}>
    <ContainerInput
      placeHolder={placeholder}
      type={type}
      disabled={disabled}
      valid={valid}
      onClick={() => {}}
      setFocus={() => null}
      LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
      RightIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
    />
  </div>
);

export const Default = Template.bind({});
