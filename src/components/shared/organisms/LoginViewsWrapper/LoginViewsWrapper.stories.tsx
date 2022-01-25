import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LoginViewsWrapper } from './LoginViewsWrapper';
import { ILoginProps } from './LoginViewWrapper.interface';

export default {
  title: 'Ailalia/Organisms/LoginViewsWrapper',
  component: LoginViewsWrapper,
  argTypes: {},
} as Meta;

const Template: Story<ILoginProps> = () => <LoginViewsWrapper />;

export const Default = Template.bind({});
