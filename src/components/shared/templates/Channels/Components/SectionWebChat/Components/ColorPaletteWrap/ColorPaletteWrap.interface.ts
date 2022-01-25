export interface IPropsColorWrap {
  checked?: boolean;
  name?: string;
  mode?: string;
  tags?: string;
  tagName?: string;
  secondaryColor?: string;
  primaryColor: string;
  customIsColor: boolean;
}

export interface ICustomColor {
  primaryColor: string;
  secondaryColor: string;
  customIsColor: boolean;
  customizeByColor: string;
  setPrimaryColor: React.Dispatch<React.SetStateAction<string>>;
  setSecundaryColor: React.Dispatch<React.SetStateAction<string>>;
  setCustomIsColor: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomizeByColor: React.Dispatch<React.SetStateAction<string>>;
  handleToggle: () => void;
}
