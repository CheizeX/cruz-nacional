import { Meta, storiesOf } from '@storybook/react';
import { FilterAgents } from './FilterAgents';

export default {
  title: 'FilterInteractions',
  component: FilterAgents,
} as Meta;

storiesOf('Ailalia/Organisms/Monitor/FilterAgents', module).add(
  'Default',
  () => {
    return (
      <FilterAgents
        onChange={() => null}
        dateAgent={[]}
        stateByAgent={[]}
        filterByState={() => {}}
        filterByAgents={() => {}}
        byAgentAvailable={[]}
        handleChange={() => {}}
        handleClear={() => {}}
        handleStateAgents={() => {}}
      />
    );
  },
);
