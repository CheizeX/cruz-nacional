import { storiesOf } from '@storybook/react';
import { ChatFilter } from './ChatFilter';

storiesOf('Ailalia/Organisms/LiveChat/ChatFilter', module).add(
  'Default',
  () => {
    return (
      <ChatFilter
        channel={[1, 2]}
        setCheckedTags={() => {}}
        checkedTags={[1, 2]}
      />
    );
  },
);
