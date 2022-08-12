import { Chat } from '../../../../../../models/chat/chat';

export type IPropsImage = {
  content: string;
  channel: string;
};
export interface IConvertsationHistory {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalId: React.Dispatch<React.SetStateAction<string>>;
  setInfoImage: React.Dispatch<React.SetStateAction<IPropsImage>>;
  selModalPreviewIamge: React.Dispatch<React.SetStateAction<boolean>>;
  handleAttachmentAgent: (content: string) => JSX.Element;
  handleAttachmentUser: (content: string, channel: string) => JSX.Element;
  chatConversationView: Chat;
}

export interface IWrapperConversation {
  focusedChats: boolean;
}

export interface IContainerWord {
  isFocusWord: boolean;
}
