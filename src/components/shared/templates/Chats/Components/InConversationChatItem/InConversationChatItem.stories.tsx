import { storiesOf } from '@storybook/react';
import { InConversationChatItem } from './InConversationChatItem';

storiesOf('Ailalia/Templates/Chats/Components', module).add(
  'InConversationChatItem',
  () => {
    return (
      <InConversationChatItem
        searchByName=""
        showOnlyPausedChats={false}
        setShowOnlyPausedChats={() => {}}
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
  },
);
