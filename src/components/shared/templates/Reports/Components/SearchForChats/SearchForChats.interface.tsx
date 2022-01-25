import { Chat } from '../../../../../../models/chat/chat';

export interface ISearchForChats {
  datsReports: Chat[];
}

export interface IContainerReports {
  index: number;
  position: string;
}
