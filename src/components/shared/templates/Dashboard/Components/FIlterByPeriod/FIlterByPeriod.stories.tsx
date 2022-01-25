import React from 'react';
import { storiesOf } from '@storybook/react';
import { FIlterByPeriod } from './FIlterByPeriod';

storiesOf('Ailalia/Organisms/Dashboard/Components', module).add(
  'FIlterByPeriod',
  () => {
    return (
      <FIlterByPeriod
        setDatePicker={() => null}
        startDate={null}
        endDate={null}
        setStartDate={() => null}
        setEndDate={() => null}
        setSelectedComponent={() => null}
        setIsComponentVisible={() => null}
      />
    );
  },
);
