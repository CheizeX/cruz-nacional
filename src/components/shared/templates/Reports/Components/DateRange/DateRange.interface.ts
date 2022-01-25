export interface IDateRange {
  dateStart: Date | null;
  dateEnd: Date | null;
  onChangeStart: (arg: Date | null) => void;
  onChangeEnd: (arg: Date | null) => void;
}
export interface IPropsDate {
  focusedStart: boolean;
  focusedEnd: boolean;
}
