import { FirstDayOfWeek, useMonth } from '@datepicker-react/hooks';
import { FC } from 'react';
import { es as locale } from 'date-fns/locale';
import { format } from 'date-fns';
import styled from 'styled-components';
import { Text } from '../../atoms/Text/Text';
import { Day } from './Day';

export interface MonthProps {
  year: number;
  month: number;
  firstDayOfWeek: FirstDayOfWeek;
}

const capitalize = (s: string) => {
  return s
    .split('')
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase(),
    )
    .join('');
};

const StyledCalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const StyledWeekdayLabel = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMonthLabel = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Month: FC<MonthProps> = ({ year, month, firstDayOfWeek }) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
    dayLabelFormat: (date: Date) => format(date, 'd', { locale }),
    monthLabelFormat: (date: Date) =>
      capitalize(format(date, 'MMMM yyyy', { locale })),
    weekdayLabelFormat: (date: Date) =>
      capitalize(format(date, 'iiiiii', { locale })),
  });

  return (
    <div>
      <StyledMonthLabel>
        <Text color="black" weight="500" size="12px">
          {monthLabel}
        </Text>
      </StyledMonthLabel>
      <StyledCalendarGrid>
        {weekdayLabels.map((dayLabel, index) => (
          <StyledWeekdayLabel key={index.toString()}>
            <Text color="#999999" weight="400" size="12px">
              {dayLabel}
            </Text>
          </StyledWeekdayLabel>
        ))}
        {(
          days as {
            dayLabel: string;
            date: Date;
          }[]
        ).map((day, index) => (
          <Day date={day.date} key={index.toString()} day={day.dayLabel} />
        ))}
      </StyledCalendarGrid>
    </div>
  );
};
