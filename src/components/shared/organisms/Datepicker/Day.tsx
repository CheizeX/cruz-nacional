import { useDay } from '@datepicker-react/hooks';
import { FC, useCallback, useContext, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../../atoms/Text/Text';
import { datepickerContext } from './Datepicker.context';

export interface DayProps {
  day: string;
  date: Date;
}

const isSelectedStyles = css`
  background-color: #8520d021;
`;

const isSelectedStartOrEndStyles = css`
  background-color: #8520d0;
  border-radius: 50%;
  color: white;
`;

const isStartStyles = css`
  background: linear-gradient(
    to left,
    #8520d021 0%,
    #8520d021 50%,
    white 50%,
    white 100%
  );
`;

const isEndStyles = css`
  background: linear-gradient(
    to right,
    #8520d021 0%,
    #8520d021 50%,
    white 50%,
    white 100%
  );
`;

const StyledDayButton = styled.button<{
  isStart: boolean;
  isEnd: boolean;
  isSelectedStartOrEnd: boolean;
  isSelected: boolean;
}>`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  color: black;
  background: white;
  cursor: pointer;

  ${({ isStart, isEnd, isSelected }) =>
    isSelected && !isStart && !isEnd && isSelectedStyles};
  ${({ isStart, isEnd, isSelected }) =>
    isStart && !isEnd && isSelected && isStartStyles};
  ${({ isStart, isEnd, isSelected }) =>
    isEnd && !isStart && isSelected && isEndStyles};
`;

const StyledDay = styled.div<{
  isSelectedStartOrEnd: boolean;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isSelectedStartOrEnd }) =>
    isSelectedStartOrEnd && isSelectedStartOrEndStyles};
`;

export const Day: FC<DayProps> = ({ day, date }) => {
  const dayRef = useRef(null);
  const {
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
  } = useContext(datepickerContext);

  const {
    isSelected,
    isSelectedStartOrEnd,
    onClick,
    onKeyDown,
    onMouseEnter,
    isWithinHoverRange,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  const isStart = useCallback(() => isStartDate(date), [date]);
  const isEnd = useCallback(() => isEndDate(date), [date]);

  if (!day) {
    return <div />;
  }

  return (
    <StyledDayButton
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      isSelected={isSelected || isWithinHoverRange}
      isStart={isStart()}
      isEnd={isEnd()}
      isSelectedStartOrEnd={isSelectedStartOrEnd}>
      <StyledDay isSelectedStartOrEnd={isSelectedStartOrEnd}>
        <Text
          color={isSelectedStartOrEnd ? '#FFF' : '#000'}
          weight={isSelectedStartOrEnd ? '600' : '400'}
          size="12px">
          {day}
        </Text>
      </StyledDay>
    </StyledDayButton>
  );
};
