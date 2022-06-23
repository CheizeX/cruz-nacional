import { ITypeUnOfficialWhatsapp } from '../WhatsappSection/ChatApi/ChatApiSection/ChatApiSection.interface';

export interface IPropsCardChannel {
  _idChannel?: string;
  name: string;
  icon: string;
  service: string;
  isActive: boolean;
  image: string;
  providerName?: string;
  handleToggle: (arg: string) => void;
  handleStatusUnOfficial: () => ITypeUnOfficialWhatsapp;
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
}

export interface IChannelInactive {
  isNotAvailable: boolean;
}
