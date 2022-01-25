import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OnboardingAcceptedInvitation } from './OnboardingAcceptedInvitation';

export default {
  title: 'Ailalia/Pages/Onboarding/OnboardingAcceptedInvitation',
  component: OnboardingAcceptedInvitation,
  argTypes: {},
} as Meta;

const Template: Story = () => <OnboardingAcceptedInvitation />;

export const Default = Template.bind({});
