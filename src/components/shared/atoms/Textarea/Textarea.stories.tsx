/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Textarea } from './Textarea';

export default {
  title: 'Ailalia/Atoms/Textarea',
  component: Textarea,
} as Meta;

const Template: Story = () => <Textarea />;

export const Default = Template.bind({});
