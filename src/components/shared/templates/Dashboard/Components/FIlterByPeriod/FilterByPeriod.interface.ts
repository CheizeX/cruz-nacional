export interface IPropsByPeriod {
  setDatePicker: React.Dispatch<React.SetStateAction<number>>;
  datePicker?: number;
  selectedComponent?: string;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
