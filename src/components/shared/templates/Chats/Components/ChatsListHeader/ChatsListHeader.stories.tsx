import { storiesOf } from '@storybook/react';
import { ChatsListHeader } from './ChatsListHeader';

storiesOf('Ailalia/Templates/Chats/Components', module).add(
  'ChatsListHeader',
  () => {
    return (
      <ChatsListHeader
        showOnlyPausedChats={false}
        setShowOnlyPausedChats={() => {}}
        checkedTags={[1, 2]}
        setCheckedTags={() => {}}
        channel={[1, 2]}
        setSortedChats={() => null}
      />
    );
  },
);
