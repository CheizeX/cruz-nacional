/* eslint-disable no-nested-ternary */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  ButtonMolecule,
  ButtonMoleculeProps,
  ButtonState,
  ButtonVariant,
  Size,
} from './Button';

export default {
  title: 'Ailalia/Atoms/Button',
  component: ButtonMolecule,
  argTypes: {
    bgColor: { control: 'text' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    isOutline: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: {
      control: { type: 'radio' },
      options: [Size.SMALL, Size.MEDIUM, Size.LARGE],
    },
  },
} as Meta;

const Template: Story<
  ButtonMoleculeProps & {
    text?: string;
    disabled: boolean;
    loading: boolean;
    isOutline: boolean;
  }
> = ({
  text = 'Example Button',
  bgColor,
  disabled,
  loading,
  isOutline,
  size,
}) => (
  <ButtonMolecule
    text={text}
    size={size ?? Size.SMALL}
    bgColor={bgColor ?? ''}
    state={
      disabled
        ? ButtonState.DISABLED
        : loading
        ? ButtonState.LOADING
        : ButtonState.NORMAL
    }
    variant={isOutline ? ButtonVariant.OUTLINED : ButtonVariant.FILLED}
    onClick={() => {}}
  />
);

export const Default = Template.bind({});
