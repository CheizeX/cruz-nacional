import { Meta, storiesOf } from '@storybook/react';
import { ChatsHistory } from './ChatHistory';

export default {
  title: 'ChatsHistory',
  component: ChatsHistory,
} as Meta;

storiesOf('Ailalia/Organisms/LiveChat/ChatsHistory', module).add(
  'Default',
  () => {
    return (
      <ChatsHistory
        setIsContentChat={() => null}
        setIsChannelChat={() => null}
        setLiveChatModal={() => null}
        setIsOpenModal={() => null}
      />
    );
  },
);
