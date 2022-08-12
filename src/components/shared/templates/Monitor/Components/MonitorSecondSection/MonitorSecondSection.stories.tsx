import { storiesOf } from '@storybook/react';
import { MonitorSecondSection } from './MonitorSecondSection';

storiesOf('Ailalia/Templates/Monitor/MonitorSecondSection', module).add(
  'MonitorSecondSection',
  () => {
    return (
      <MonitorSecondSection
        setOptionFilterSecond={() => {}}
        onChange={() => null}
        countAgent={0}
        dateAgent={[]}
        chats={[]}
        agentNotAvailable={[]}
        stateByAgent={[]}
        filterByState={() => {}}
        filterByAgents={() => {}}
        byAgentAvailable={[]}
        handleChange={() => {}}
        handleStateAgents={() => {}}
        clearSecondSection={() => {}}
        setSectionAgent={() => null}
      />
    );
  },
);
