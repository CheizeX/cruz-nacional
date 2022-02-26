export interface IPropsCardChannel {
  _idChannel?: string;
  name: string;
  icon: string;
  service: string;
  isActive: boolean;
  image: string;
  providerName?: string;
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
}

export interface IContainerCard {
  isChecked: boolean;
}
