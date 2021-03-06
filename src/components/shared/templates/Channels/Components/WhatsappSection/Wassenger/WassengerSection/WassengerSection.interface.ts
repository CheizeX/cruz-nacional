export interface IPropsWassenger {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  getChannelList: () => Promise<void>;
  handleClickQR: () => Promise<void>;
  setSelectedByComponentUnOfficialWhatsapp: React.Dispatch<
    React.SetStateAction<number>
  >;
  handleDiveceCreate: () => void;
  selectedByComponentUnOfficialWhatsapp: number;
  whatsappUnOfficial: boolean;
}
export interface IContainerWassenger {
  selectedByComponent: number;
}
