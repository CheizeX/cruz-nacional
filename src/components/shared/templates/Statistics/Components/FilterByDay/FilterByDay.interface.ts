export interface IFilterDay {
  onChangeDate: (dayGraph: Date | null) => void;
  handleStatisticsByDay: () => void;
  isLoandingDay: boolean;
  graphFilterDay: Date | null;
}
