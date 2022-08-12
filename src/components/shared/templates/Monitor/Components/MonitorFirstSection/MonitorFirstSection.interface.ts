import { Chat } from '../../../../../../models/chat/chat';
import { User } from '../../../../../../models/users/user';

export interface IDataTag {
  id?: number;
  name?: string;
  color?: string;
}
export interface IContainerProps {
  index: number;
  position: string;
  isColorPaused: boolean;
}

export interface IFirstSetionProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateAgent?: User[];
  chats?: Chat[];
  filterStatus: (arg: string) => void;
  filterChannels: (arg: string) => void;
  filterAgents: (arg: string) => void;
  statusAgent: string[];
  byChannels: string[];
  IDAgents: string[];
  orderByInteraction: boolean;
  resetHandle: () => void | Promise<void>;
  setFilterChat: React.Dispatch<React.SetStateAction<string>>;
  handleSearchChatToday: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOrderByInteraction: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOptionFilter: React.Dispatch<React.SetStateAction<boolean>>;
  totalChats: number;
}
