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
  DatepickerContainer,
  DatepickerButtonsContainer,
  DatepickerButton,
} from './shared';

export interface RangeDatepickerProps {
  onChange?: (data: { startDate: Date | null; endDate: Date | null }) => void;
}

export const RangeDatepicker: FC<RangeDatepickerProps> = ({
  onChange = () => {},
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInput>(START_DATE);

  const handleDateChange = (data: OnDatesChangeProps) => {
    if (!data.focusedInput) {
      setStartDate(data.startDate);
      setEndDate(data.endDate);
      setFocusedInput(START_DATE);
    } else {
      setStartDate(data.startDate);
      setEndDate(data.endDate);
      setFocusedInput(data.focusedInput);
    }
  };

  useEffect(() => {
    onChange({ startDate, endDate });
  }, [startDate, endDate]);

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
    firstDayOfWeek: 1,
    startDate,
    endDate,
    focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 2,
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
