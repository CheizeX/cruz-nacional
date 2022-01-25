export interface IPropsReview {
  selectedComponent?: string;
  setSelectedComponent: React.Dispatch<React.SetStateAction<string>>;
  chartDatePicker: number;
  setChartDatePicker: React.Dispatch<React.SetStateAction<number>>;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}
