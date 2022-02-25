import { storiesOf } from '@storybook/react';
import { ChatsList } from './ChatsList';

storiesOf('Ailalia/Templates/Chats/Components', module).add('ChatsList', () => {
  return (
    <ChatsList
      onChangeSearchName={() => null}
      searchByName=""
      showOnlyPausedChats
      setShowOnlyPausedChats={() => {}}
      checkedTags={[1, 2]}
      setCheckedTags={() => {}}
      channel={[1, 2]}
      setChatInputDialogue={() => {}}
      setUserSelected={() => null}
      setSortedChats={() => null}
      setActiveByDefaultTab={() => null}
      setDropZoneDisplayed={() => null}
      newMessagesInChat={{
        key: '',
        messageLength: 0,
      }}
      setNewMessagesInChat={() => null}
    />
  );
});
