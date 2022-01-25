import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LoginSuccessFactors } from './LoginSuccessFactors';

export default {
  title: 'Ailalia/Pages/Login/LoginSuccessFactors',
  argTypes: {},
  component: LoginSuccessFactors,
} as Meta;

const Template: Story = () => <LoginSuccessFactors />;
export const Default = Template.bind({});
