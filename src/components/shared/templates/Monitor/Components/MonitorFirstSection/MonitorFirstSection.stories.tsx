import { storiesOf } from '@storybook/react';
import { MonitorFirstSection } from './MonitorFirstSection';

storiesOf('Ailalia/Templates/Monitor/MonitorFirstSection', module).add(
  'MonitorFirstSection',
  () => {
    return (
      <MonitorFirstSection
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
