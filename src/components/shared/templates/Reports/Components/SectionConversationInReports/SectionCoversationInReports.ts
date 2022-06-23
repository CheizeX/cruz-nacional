import { Chat } from '../../../../../../models/chat/chat';

export interface ISectionConversationInReports {
  setIsModalConversationInReports: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  dataFilterReports: Chat[];
}
