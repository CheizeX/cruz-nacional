import { storiesOf } from '@storybook/react';
import { ChatTransfer } from './ChatTransfer';

storiesOf('Ailalia/Organisms/LiveChat/ChatTransfer', module).add(
  'Default',
  () => {
    return (
      <ChatTransfer
        setLiveChatModal={() => null}
        setLiveChatPage={() => null}
        setAgentTransfer={() => null}
      />
    );
  },
);
