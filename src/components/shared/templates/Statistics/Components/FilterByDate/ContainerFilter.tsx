import { FC } from 'react';
import { Radio } from '../../../../atoms/RadioButton/RadioButton';
import { Text } from '../../../../atoms/Text/Text';
import { WrapperFilterByDate } from './FilterByDate.styled';
import { IContainerFilter } from './ContainerFilterByDay.interface';

export const ContainerFilter: FC<IContainerFilter> = ({
  setDay,
  day,
  customRangeText,
  setCustomRange,
  setIsComponentVisible,
  setCustomRangeText,
}) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;
    if (targetValue !== 'RangeCustom') {
      setDay(targetValue);
      setCustomRangeText(targetValue);
    }
    if (targetValue === 'RangeCustom') {
      setCustomRange({
        isCustomRange: true,
        startDate: null,
        endDate: null,
      });
      setCustomRangeText(targetValue);
    }
  };
  const handleToggle = async (date: string) => {
    if (date !== 'RangeCustom') {
      setDay(date);
      setCustomRangeText(date);
      setIsComponentVisible(false);
    }
    if (date === 'RangeCustom') {
      setCustomRange({
        isCustomRange: true,
        startDate: null,
        endDate: null,
      });
      setCustomRangeText(date);
    }
  };
  return (
    <WrapperFilterByDate>
      <div>
        <Text>Filtrar por fecha:</Text>
      </div>
      <div>
        <button type="button" onClick={() => handleToggle('today')}>
          <Radio
            value="today"
            name="radio"
            id="radio"
            checked={day}
            onChange={(event) => handleRadioChange(event)}
          />
          <Text>Hoy</Text>
        </button>
        <button type="button" onClick={() => handleToggle('yesterday')}>
          <Radio
            name="radio"
            id="radio"
            value="yesterday"
            checked={day}
            onChange={(event) => handleRadioChange(event)}
          />
          <Text>Ayer</Text>
        </button>
        <button type="button" onClick={() => handleToggle('currentWeek')}>
          <Radio
            name="radio"
            id="radio"
            value="currentWeek"
            checked={day}
            onChange={(event) => handleRadioChange(event)}
          />
          <Text>Esta Semana</Text>
        </button>
        <button type="button" onClick={() => handleToggle('currentMonth')}>
          <Radio
            name="radio"
            id="radio"
            value="currentMonth"
            checked={day}
            onChange={(event) => handleRadioChange(event)}
          />
          <Text>Este Mes</Text>
        </button>
        <button type="button" onClick={() => handleToggle('lastMonth')}>
          <Radio
            name="radio"
            id="radio"
            checked={day}
            value="lastMonth"
            onChange={(event) => handleRadioChange(event)}
          />
          <Text>Mes Anterior</Text>
        </button>
        <button type="button" onClick={() => handleToggle('RangeCustom')}>
          <Radio
            name="radio"
            id="radio"
            checked={customRangeText}
            value="RangeCustom"
            onChange={(event) => handleRadioChange(event)}
          />
          <Text>Rango Personalizado</Text>
        </button>
      </div>
    </WrapperFilterByDate>
  );
};
