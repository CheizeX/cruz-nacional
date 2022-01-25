/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Ailalia/Atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
    weight: { control: 'text' },
    family: { control: 'text' },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args}>Ejemplar</Text>;

export const Default = Template.bind({});
