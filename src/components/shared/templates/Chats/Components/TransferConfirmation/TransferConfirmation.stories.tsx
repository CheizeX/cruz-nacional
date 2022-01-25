import { Meta, storiesOf } from '@storybook/react';
import { TransferConfirmation } from './TransferConfirmation';

export default {
  title: 'TransferConfirmation',
  component: TransferConfirmation,
} as Meta;

storiesOf('Ailalia/Molecules/LiveChat/TransferConfirmation', module).add(
  'Default',
  () => {
    return (
      <TransferConfirmation
        setUserSelected={() => {}}
        setLiveChatModal={() => null}
        setLiveChatPage={() => null}
        agent="Pedro Sanchez"
      />
    );
  },
);
