import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OnboardingErrorInvitation } from './OnboardingErrorInvitation';

export default {
  title: 'Ailalia/Pages/Onboarding/OnboardingErrorInvitation',
  component: OnboardingErrorInvitation,
  argTypes: {},
} as Meta;

const Template: Story = () => <OnboardingErrorInvitation />;

export const Default = Template.bind({});
