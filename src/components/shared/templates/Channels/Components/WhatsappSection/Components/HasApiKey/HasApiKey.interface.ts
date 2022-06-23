export interface IHasApiKey {
  radioChecked: string;
  setRadioChecked: React.Dispatch<React.SetStateAction<string>>;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
