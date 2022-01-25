import { storiesOf } from '@storybook/react';
import { PendingsChatItem } from './PendingsChatItem';

storiesOf('Ailalia/Templates/Chats/Components', module).add(
  'PendingsChatItem',
  () => {
    return (
      <PendingsChatItem
        chatsPendings={[]}
        setUserSelected={() => null}
        setSortedChats={() => null}
        setActiveByDefaultTab={() => null}
      />
    );
  },
);
