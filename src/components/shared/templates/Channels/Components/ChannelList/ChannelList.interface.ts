import { ListChannel } from '../../../../../../models/channels/channel';

export interface IPropsList {
  listChannel: ListChannel;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
}
