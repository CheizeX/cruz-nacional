export interface IPropsWebchatColorPicker {
  checked?: boolean;
  name?: string;
  mode?: string;
  tags?: string;
  tagName?: string;
  secondaryColor?: string;
  primaryColor?: string;
  isCustomColor: boolean;
}

export interface ICustomColorWebchatColorPicker {
  isCustomColor: boolean;
  primaryColor: string;
  secondaryColor: string;
  colorName: string;
  setPrimaryColor: React.Dispatch<React.SetStateAction<string>>;
  setSecondaryColor: React.Dispatch<React.SetStateAction<string>>;
  setIsCustomColor: React.Dispatch<React.SetStateAction<boolean>>;
  setColorName: React.Dispatch<React.SetStateAction<string>>;
  isAnimated: boolean;
  setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
}
