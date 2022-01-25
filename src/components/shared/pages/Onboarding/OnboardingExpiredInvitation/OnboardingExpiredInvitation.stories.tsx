import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OnboardingExpiredInvitation } from './OnboardingExpiredInvitation';

export default {
  title: 'Ailalia/Pages/Onboarding/OnboardingExpiredInvitation',
  component: OnboardingExpiredInvitation,
  argTypes: {},
} as Meta;

const Template: Story = () => <OnboardingExpiredInvitation />;

export const Default = Template.bind({});
