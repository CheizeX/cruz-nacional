export interface IPropsFilterReviewButton {
  children?: React.ReactNode;
  focusRadio?: boolean;
}
export interface IPropsComponent {
  chartDatePicker: number;
  setIsActive: React.Dispatch<React.SetStateAction<number>>;
  isActive: number;
  setChartDatePicker: React.Dispatch<React.SetStateAction<number>>;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export enum DatePicker {
  CURRENT_WEEK = 'currentWeek',
  CURRENT_MONTH = 'currentMonth',
  LAST_MONTH = 'lastMonth',
}
