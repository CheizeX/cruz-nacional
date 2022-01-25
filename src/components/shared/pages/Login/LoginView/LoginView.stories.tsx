import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LoginView } from './LoginView';

export default {
  title: 'Ailalia/Pages/Login/LoginView',
  component: LoginView,
  argTypes: {},
} as Meta;

const Template: Story = () => <LoginView />;

export const Default = Template.bind({});
