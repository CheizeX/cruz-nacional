import { Chat } from '../../../../../../models/chat/chat';

export interface IPropsSectionConversation {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  chatConversationView: Chat[];
}
