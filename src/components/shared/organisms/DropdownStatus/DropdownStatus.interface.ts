export interface IPropsDropdownStatus {
  statusChecked: string;
  handleClickStatus: (status: string) => void;
}
export interface IPropsWraperDropdownStatus {
  focusCheck?: boolean;
  statusChecked?: string;
  position?: string;
}

export interface IPropsSingleStatus {
  [key: string]: string;
  AVAILABLE: string;
  LUNCH: string;
  BATHROOM: string;
  CALL: string;
}
export interface IPropsStatusDrop {
  [key: string]: string;
  AVAILABLE: string;
  LUNCH: string;
  BREAK: string;
  BATHROOM: string;
  PAUSES: string;
  ADMINISTRATIVE: string;
  END: string;
}
