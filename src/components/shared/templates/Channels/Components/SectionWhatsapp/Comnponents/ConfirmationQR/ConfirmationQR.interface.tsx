export interface IPropsConfirmationQR {
  checkedConfirmation: boolean;
}

export interface IPropsComponentQR {
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
}
