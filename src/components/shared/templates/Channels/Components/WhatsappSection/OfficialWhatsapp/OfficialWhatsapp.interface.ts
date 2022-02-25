export interface IPropsOfficialContainer {
  selectedComponent: number;
}

export interface IPropsOfficialWhatsapp {
  getChannelList: () => Promise<void>;
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
}
