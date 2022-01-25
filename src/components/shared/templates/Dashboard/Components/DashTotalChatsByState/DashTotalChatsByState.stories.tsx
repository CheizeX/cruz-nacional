import React from 'react';
import { storiesOf } from '@storybook/react';
import { DashTotalChatsByState } from './DashTotalChatsByState';

storiesOf(
  'Ailalia/Organisms/Dashboard/Molecules/TotalChatsByState',
  module,
).add('TotalChatsByState', () => {
  return <DashTotalChatsByState />;
});
