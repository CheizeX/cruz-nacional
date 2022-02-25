export interface IPropsDescription {
  setCustomDescription: React.Dispatch<React.SetStateAction<string>>;
  setCustomTitle: React.Dispatch<React.SetStateAction<string>>;
  handleAnimation: () => void;
  isAnimation: boolean;
}
export interface IPropsAnimation {
  isChecked: boolean;
}
