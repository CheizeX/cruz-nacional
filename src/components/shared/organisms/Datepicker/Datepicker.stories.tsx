/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Text } from '../../atoms/Text/Text';
import { SingleDatepicker } from './SingleDatepicker';
import { RangeDatepicker } from './RangeDatepicker';

export default {
  title: 'Ailalia/Organisms/Datepickers',
  argTypes: {},
} as Meta;

const RangeTemplate: Story = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = ({
    startDate: newStartDate,
    endDate: newEndDate,
  }: {
    startDate: Date | null;
    endDate: Date | null;
  }) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  return (
    <>
      <div>
        <Text>Start date: </Text>
        <Text weight="400">{startDate && startDate.toLocaleString()}</Text>
      </div>
      <div>
        <Text>End date: </Text>
        <Text weight="400">{endDate && endDate.toLocaleString()}</Text>
      </div>
      <RangeDatepicker onChange={onChange} />
    </>
  );
};

export const Range = RangeTemplate.bind({});

Range.storyName = 'RangeDatepicker';

const SingleTemplate: Story = () => {
  const [date, setDate] = useState<Date | null>(null);

  const onChange = (newDate: Date | null) => {
    setDate(newDate);
  };

  return (
    <>
      <div>
        <Text>Date: </Text>
        <Text weight="400">{date && date.toLocaleString()}</Text>
      </div>

      <SingleDatepicker maxDate={undefined} onChange={onChange} />
    </>
  );
};

export const Single = SingleTemplate.bind({});

Single.storyName = 'SingleDatepicker';
