import { Chat } from '../../../../../../models/chat/chat';

export interface IConversationInReports {
  handleAttachmentAgent: (content: string) => JSX.Element;
  handleAttachmentUser: (content: string, channel: string) => JSX.Element;
  setIsModalConversationInReports: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setDataImage: React.Dispatch<
    React.SetStateAction<{
      content: string;
      channel: string;
    }>
  >;
  setIsModalReport: React.Dispatch<React.SetStateAction<string>>;
  dataFilterReports: Chat[];
  selModalPreviewIamge: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IContainerConversation {
  isFocusedWord: boolean;
}
