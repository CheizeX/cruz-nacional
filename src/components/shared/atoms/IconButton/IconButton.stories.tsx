/* eslint-disable no-nested-ternary */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  IconButtonMolecule,
  IconButtonMoleculeProps,
  IconButtonState,
} from './IconButton';
import { SVGIcon } from '../SVGIcon/SVGIcon';

export default {
  title: 'Ailalia/Atoms/IconButton',
  component: IconButtonMolecule,
  argTypes: {
    color: { control: 'color' },
    bgColor: { control: 'color' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} as Meta;

const Template: Story<
  IconButtonMoleculeProps & {
    disabled: boolean;
    loading: boolean;
  }
> = ({ bgColor, disabled, loading, color }) => (
  <IconButtonMolecule
    bgColor={bgColor ?? ''}
    color={color ?? ''}
    Icon={() => <SVGIcon iconFile="/icons/paper_plane.svg" />}
    state={
      disabled
        ? IconButtonState.DISABLED
        : loading
        ? IconButtonState.LOADING
        : IconButtonState.NORMAL
    }
    onClick={action('clicked')}
  />
);

export const Default = Template.bind({});
