import { FC } from 'react';
import { FilterButtonDate } from './FilterDateButton';
import {
  StyledRangeDate,
  StyledHeaderRageDate,
  StyledBodyRageDate,
} from './FilterDate.styled';
import { IPropsFilterDate } from './FilterDate.interface';
import { Text } from '../../../../atoms/Text/Text';

export const FilterDateDashboard: FC<IPropsFilterDate> = ({
  setDatePicker,
  datePicker,
}) => {
  return (
    <StyledRangeDate datePicker={datePicker} setDatePicker={setDatePicker}>
      <StyledHeaderRageDate>
        <Text>Fitrar por fecha</Text>
      </StyledHeaderRageDate>
      <StyledBodyRageDate>
        <FilterButtonDate setDatePicker={setDatePicker} datePicker={datePicker}>
          <div key="1" title="Hoy">
            Hoy
          </div>
          <div key="2" title="Ayer">
            Ayer
          </div>
          <div key="3" title="Este mes">
            Este mes
          </div>
          <div key="4" title="Mes anterior">
            Mes anterior
          </div>
          <div key="5" title="Rango personalizado">
            Rango Personalizado
          </div>
        </FilterButtonDate>
      </StyledBodyRageDate>
    </StyledRangeDate>
  );
};
