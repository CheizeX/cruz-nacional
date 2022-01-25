import { FC, useState } from 'react';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { Agents } from '../Components/Agents/Agents';
import { IPropsAgents } from '../Components/Agents/Agents.interface';
import { DashTotalChatsByState } from '../Components/DashTotalChatsByState/DashTotalChatsByState';
import { ModalChart } from '../Components/ModalChart/ModalChart';
import { ReviewChart } from '../Components/ReviewChart/ReviewChart';
import {
  StyledDashboardSection,
  WrapperSection,
} from './DashboardSection.styled';

export const DashboardSection: FC<IPropsAgents> = () => {
  const [datePicker, setDatePicker] = useState<number>(0);
  // const [close, setClose] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [chartDatePicker, setChartDatePicker] = useState<number>(0);
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [componentReview, setComponentReview] = useState<boolean>(false);

  return (
    <StyledDashboardSection>
      <DashTotalChatsByState />
      <WrapperSection>
        <ModalMolecule isModal={componentReview}>
          <ModalChart setComponentReview={setComponentReview} />
        </ModalMolecule>
        <ReviewChart
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
          chartDatePicker={chartDatePicker}
          setChartDatePicker={setChartDatePicker}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <Agents
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          datePicker={datePicker}
          setDatePicker={setDatePicker}
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
          componentReview={componentReview}
          setComponentReview={setComponentReview}
        />
      </WrapperSection>
    </StyledDashboardSection>
  );
};
