import { storiesOf } from '@storybook/react';
import { EndChatConfirmation } from './EndChatConfirmation';

storiesOf('Ailalia/Organisms/LiveChat/EndChatConfirmation', module).add(
  'Default',
  () => {
    return (
      <EndChatConfirmation
        setLiveChatModal={() => null}
        isLoanding={false}
        setOpenEndChat={() => null}
        handleFinishedChat={() => null}
      />
    );
  },
);
