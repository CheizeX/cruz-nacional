import { Meta, storiesOf } from '@storybook/react';
import { EndChat } from './EndChat';

export default {
  title: 'EndChat',
  component: EndChat,
} as Meta;

storiesOf('Ailalia/Organisms/LiveChat/EndChat', module).add('Default', () => {
  return <EndChat setLiveChatModal={() => null} />;
});
