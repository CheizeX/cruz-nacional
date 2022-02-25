export interface IPropsDropdownStatus {
  statusChecked: string;
  activoCheck: number;
  handleClickStatus: (arg: string, num: number, status: string) => void;
}
export interface IPropsWraperDropdownStatus {
  focusCheck?: boolean;
  statusChecked?: string;
  position?: string;
}
