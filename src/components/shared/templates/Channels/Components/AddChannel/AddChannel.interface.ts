import { ListChannel } from '../../../../../../models/channels/channel';

export interface IPropsAddChannel {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  listChannel: ListChannel;
  showDivice: boolean;
  handleToggle: (arg: string) => void;
}
