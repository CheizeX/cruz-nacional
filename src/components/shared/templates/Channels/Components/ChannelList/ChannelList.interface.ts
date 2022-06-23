import { ListChannel } from '../../../../../../models/channels/channel';
import { ITypeUnOfficialWhatsapp } from '../WhatsappSection/ChatApi/ChatApiSection/ChatApiSection.interface';

export interface IPropsList {
  listChannel: ListChannel;
  handleToggle: (arg: string) => void;
  handleStatusUnOfficial: () => ITypeUnOfficialWhatsapp;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
}
