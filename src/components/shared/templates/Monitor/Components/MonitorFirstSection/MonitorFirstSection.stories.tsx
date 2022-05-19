import { storiesOf } from '@storybook/react';
import { MonitorFirstSection } from './MonitorFirstSection';

storiesOf('Ailalia/Templates/Monitor/MonitorFirstSection', module).add(
  'MonitorFirstSection',
  () => {
    return (
      <MonitorFirstSection
        setIsOpenModal={() => null}
        totalChats={0}
        setClientIdConversation={() => null}
        handleSearchChatToday={() => null}
        orderByInteraction={false}
        setOrderByInteraction={() => null}
        setFilterChat={() => null}
        onChange={() => null}
        dateAgent={[]}
        byChannels={[]}
        IDAgents={[]}
        statusAgent={[]}
        filterStatus={() => {}}
        filterAgents={() => {}}
        filterChannels={() => {}}
        onHandleToggle={() => {}}
        resetHandle={() => {}}
      />
    );
  },
);
