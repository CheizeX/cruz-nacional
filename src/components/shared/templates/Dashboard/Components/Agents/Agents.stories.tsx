import React from 'react';
import { storiesOf } from '@storybook/react';
import { Agents } from './Agents';

storiesOf('Ailalia/Organisms/Dashboard/Agents', module).add('Default', () => {
  return (
    <Agents
      setSelectedComponent={() => null}
      setDatePicker={() => null}
      startDate={null}
      endDate={null}
      setStartDate={() => null}
      setEndDate={() => null}
      componentReview={false}
      setComponentReview={() => null}
    />
  );
});
