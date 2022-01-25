import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  LoginChangePassword,
  LoginChangePasswordProps,
} from './LoginChangePassword';

export default {
  title: 'Ailalia/Pages/Login/LoginChangePassword',
  component: LoginChangePassword,
  argTypes: {},
} as Meta;

const Template: Story<LoginChangePasswordProps> = () => <LoginChangePassword />;
export const Default = Template.bind({});
