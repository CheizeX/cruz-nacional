import { FC } from 'react';
import {
  StyledRangeDate,
  StyledHeaderRageDate,
  StyledBodyRageDate,
} from './ContainerFilterReview.styled';
import { IContainerPropsReview } from './ContainerFilterReview.interface';
import { Text } from '../../../../atoms/Text/Text';
import { FilterReviewDate } from '../FilterReviewDate/FiterReviewDate';

export const ContainerFilterReview: FC<IContainerPropsReview> = ({
  setChartDatePicker,
  chartDatePicker,
  setIsComponentVisible,
  setIsActive,
  isActive,
}) => {
  return (
    <StyledRangeDate
      setChartDatePicker={setChartDatePicker}
      setIsComponentVisible={setIsComponentVisible}
      isActive={isActive}
      setIsActive={setIsActive}
      chartDatePicker={chartDatePicker}>
      <StyledHeaderRageDate>
        <Text>Fitrar por fecha</Text>
      </StyledHeaderRageDate>
      <StyledBodyRageDate>
        <FilterReviewDate
          setIsActive={setIsActive}
          isActive={isActive}
          setChartDatePicker={setChartDatePicker}
          setIsComponentVisible={setIsComponentVisible}
          chartDatePicker={chartDatePicker}>
          <div key="1" title="Esta semana">
            Semana
          </div>
          <div key="2" title="Este mes">
            Este mes
          </div>
          <div key="3" title="Mes anterior">
            Mes anterior
          </div>
          <div key="4" title="Rango personalizado">
            Rango Personalizado
          </div>
        </FilterReviewDate>
      </StyledBodyRageDate>
    </StyledRangeDate>
  );
};
