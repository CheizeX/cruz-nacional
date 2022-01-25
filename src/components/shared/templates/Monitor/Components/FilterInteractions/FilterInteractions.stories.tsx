import { Meta, storiesOf } from '@storybook/react';
import { FilterInteractions } from './FilterInteractions';

export default {
  title: 'FilterInteractions',
  component: FilterInteractions,
} as Meta;

storiesOf('Ailalia/Organisms/Monitor/FilterInteractions', module).add(
  'Default',
  () => {
    return (
      <FilterInteractions
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
