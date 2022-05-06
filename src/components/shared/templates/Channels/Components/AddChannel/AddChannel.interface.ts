import { ListChannel } from '../../../../../../models/channels/channel';

export interface IPropsAddChannel {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
  listChannel: ListChannel;
  showDivice: boolean;
}
