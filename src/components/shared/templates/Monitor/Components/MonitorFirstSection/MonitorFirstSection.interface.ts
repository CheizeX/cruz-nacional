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
  filterStatus: (arg: number) => void;
  filterChannels: (arg: number) => void;
  filterAgents: (arg: string) => void;
  statusAgent: number[];
  byChannels: number[];
  IDAgents: string[];
  orderByInteraction: boolean;
  onHandleToggle: () => void | Promise<void>;
  resetHandle: () => void | Promise<void>;
  setFilterChat: React.Dispatch<React.SetStateAction<string>>;
  handleSearchChatToday: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOrderByInteraction: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setClientIdConversation: React.Dispatch<React.SetStateAction<string>>;
  totalChats: number;
}
