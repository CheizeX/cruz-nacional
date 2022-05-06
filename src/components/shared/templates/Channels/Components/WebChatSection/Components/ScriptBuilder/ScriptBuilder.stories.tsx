import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ScriptBuilder } from './ScriptBuilder';

export default {
  title: 'Ailalia/Pages/Channel/ScriptBuilder',
  component: ScriptBuilder,
  argTypes: {},
} as Meta;

const Template: Story = () => (
  <ScriptBuilder setIsSectionWebChat={() => null} />
);

export const Default = Template.bind({});
