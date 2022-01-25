import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import { FilterDateDashboard } from './FilterDate';

export default {
  title: 'FilterDateDashboard',
  component: FilterDateDashboard,
} as Meta;

storiesOf('Ailalia/Organisms/Dashboard/FilterDateDashboard', module).add(
  'Default',
  () => {
    return <FilterDateDashboard setDatePicker={() => null} />;
  },
);
