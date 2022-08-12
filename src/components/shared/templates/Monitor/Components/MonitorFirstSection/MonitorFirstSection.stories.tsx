import { storiesOf } from '@storybook/react';
import { MonitorFirstSection } from './MonitorFirstSection';

storiesOf('Ailalia/Templates/Monitor/MonitorFirstSection', module).add(
  'MonitorFirstSection',
  () => {
    return (
      <MonitorFirstSection
        setOptionFilter={() => null}
        setIsOpenModal={() => null}
        totalChats={0}
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
        resetHandle={() => {}}
      />
    );
  },
);
