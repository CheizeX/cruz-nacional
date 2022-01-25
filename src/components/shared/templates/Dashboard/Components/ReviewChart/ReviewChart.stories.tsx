import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import { ReviewChart } from './ReviewChart';

export default {
  title: 'ReviewChart',
  component: ReviewChart,
} as Meta;

storiesOf('Ailalia/Organisms/Dashboard/ReviewChart', module).add(
  'Default',
  () => {
    return (
      <ReviewChart
        chartDatePicker={0}
        setChartDatePicker={() => null}
        setSelectedComponent={() => null}
        startDate={null}
        endDate={null}
        setStartDate={() => null}
        setEndDate={() => null}
      />
    );
  },
);
