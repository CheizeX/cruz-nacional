import { FC, useState } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { StyledDateRange, StyledSecondDate } from './DateRange.styled';
import { SingleDatepicker } from '../../../../organisms/Datepicker/SingleDatepicker';
import { IDateRange } from './DateRange.interface';
import { ButtonMolecule, ButtonState } from '../../../../atoms/Button/Button';

export const DateRange: FC<IDateRange> = ({
  dateStart,
  dateEnd,
  onChangeStart,
  onChangeEnd,
}) => {
  const [datePickerStart, setDatePickerStart] = useState(false);
  const [datePickerEnd, setDatePickerEnd] = useState(false);
  const handleClickStartDatePicker = () => {
    if (datePickerStart !== true) {
      setDatePickerEnd(false);
    }
    setDatePickerStart((start) => !start);
  };
  const handleClickEndDatePicker = () => {
    if (datePickerEnd !== true) {
      setDatePickerStart(false);
    }
    setDatePickerEnd((end) => !end);
  };

  return (
    <StyledDateRange focusedStart={datePickerStart} focusedEnd={datePickerEnd}>
      <Text>Fecha inicio</Text>
      <Text>
        ({!dateStart ? `dd/mm/yyyy` : dateStart.toLocaleDateString()})
      </Text>
      <ContainerInput
        setFocus={() => false}
        onClick={handleClickStartDatePicker}
        onChange={() => onChangeStart}
        value={dateStart ? dateStart.toLocaleDateString() : ''}
        LeftIcon={() => <SVGIcon iconFile="/icons/candelar_alt.svg" />}
      />
      <StyledSecondDate>
        {datePickerStart ? (
          <>
            <div>
              <Text>Fecha de inicio</Text>
              <button type="button" onClick={() => setDatePickerStart(false)}>
                <SVGIcon iconFile="/icons/times.svg" />
              </button>
            </div>
            <SingleDatepicker
              minDate={undefined}
              maxDate={new Date()}
              onChange={onChangeStart}
            />
            <div>
              <ButtonMolecule
                text="Confirmar"
                onClick={() => setDatePickerStart(false)}
                state={!dateStart ? ButtonState.DISABLED : ButtonState.NORMAL}
              />
            </div>
          </>
        ) : null}
      </StyledSecondDate>
      <Text>Fecha de fin</Text>
      <Text> ({!dateEnd ? `dd/mm/yyyy` : dateEnd.toLocaleDateString()})</Text>
      <ContainerInput
        setFocus={() => false}
        onClick={handleClickEndDatePicker}
        onChange={() => onChangeEnd}
        value={dateEnd ? dateEnd.toLocaleDateString() : ''}
        LeftIcon={() => <SVGIcon iconFile="/icons/candelar_alt.svg" />}
      />
      <StyledSecondDate>
        {datePickerEnd ? (
          <>
            <div>
              <Text>Fecha de fin</Text>
              <button type="button" onClick={() => setDatePickerEnd(false)}>
                <SVGIcon iconFile="/icons/times.svg" />
              </button>
            </div>
            <SingleDatepicker
              minDate={dateStart ?? undefined}
              maxDate={new Date()}
              onChange={onChangeEnd}
            />{' '}
            <div>
              <ButtonMolecule
                text="Confirmar"
                onClick={() => setDatePickerEnd(false)}
                state={!dateEnd ? ButtonState.DISABLED : ButtonState.NORMAL}
              />
            </div>
          </>
        ) : null}
      </StyledSecondDate>
    </StyledDateRange>
  );
};
