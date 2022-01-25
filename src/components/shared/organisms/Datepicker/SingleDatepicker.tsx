import {
  FocusedInput,
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from '@datepicker-react/hooks';
import React, { FC, useEffect, useState } from 'react';
import { datepickerContext } from './Datepicker.context';
import { Month } from './Month';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import {
  DatepickerButton,
  DatepickerButtonsContainer,
  DatepickerContainer,
} from './shared';

export interface SingleDatepickerProps {
  onChange?: (date: Date | null) => void;
  minDate?: Date | undefined;
  maxDate?: Date | undefined;
}

export const SingleDatepicker: FC<SingleDatepickerProps> = ({
  onChange = () => {},
  minDate,
  maxDate,
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInput>(START_DATE);

  const handleDateChange = (data: OnDatesChangeProps) => {
    setDate(data.startDate);
    setFocusedInput(START_DATE);
  };

  useEffect(() => {
    onChange(date);
  }, [date]);

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isStartDate,
    isEndDate,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    exactMinBookingDays: true,
    minBookingDays: 1,
    minBookingDate: minDate,
    maxBookingDate: maxDate,
    firstDayOfWeek: 1,
    startDate: date,
    endDate: date,
    focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  });

  return (
    <datepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isStartDate,
        isEndDate,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}>
      <DatepickerContainer activeMonthsCount={activeMonths.length}>
        {activeMonths.map((month) => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
        <DatepickerButtonsContainer>
          <DatepickerButton type="button" onClick={goToPreviousMonths}>
            <SVGIcon iconFile="/icons/chevron-left.svg" color="#999999" />
          </DatepickerButton>
          <DatepickerButton type="button" onClick={goToNextMonths}>
            <SVGIcon iconFile="/icons/chevron-right.svg" color="#999999" />
          </DatepickerButton>
        </DatepickerButtonsContainer>
      </DatepickerContainer>
    </datepickerContext.Provider>
  );
};
