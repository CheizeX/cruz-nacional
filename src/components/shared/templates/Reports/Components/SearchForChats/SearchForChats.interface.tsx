import { Chat } from '../../../../../../models/chat/chat';

export interface ISearchForChats {
  datsReports: Chat[];
  setClientIdInReports: React.Dispatch<React.SetStateAction<string>>;
  setIsModalConversationInReports: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export interface IContainerReports {
  index: number;
  position: string;
}
