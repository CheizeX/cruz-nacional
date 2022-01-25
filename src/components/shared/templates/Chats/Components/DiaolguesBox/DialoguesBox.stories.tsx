import { storiesOf } from '@storybook/react';
import { DialoguesBox } from './DialoguesBox';

storiesOf('Ailalia/Templates/Chats/Components', module).add(
  'DialoguesBox',
  () => {
    return <DialoguesBox setUserSelected={() => null} />;
  },
);
