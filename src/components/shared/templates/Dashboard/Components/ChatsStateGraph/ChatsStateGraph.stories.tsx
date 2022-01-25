import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChatsStateGraph } from './ChatsStateGraph';

storiesOf('Ailalia/Organisms/Dashboard/Components/ChatsStateGraph', module).add(
  'ChatsStateGraph',
  () => {
    return <ChatsStateGraph />;
  },
);
