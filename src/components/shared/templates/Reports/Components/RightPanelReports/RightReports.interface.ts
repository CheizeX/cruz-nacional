import { Chat } from '../../../../../../models/chat/chat';

export interface IPropsRightReport {
  handleDownload: (extension: string) => void | Promise<void>;
  onChangeReports: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setIsModalConversationInReports: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setClientIdInReports: React.Dispatch<React.SetStateAction<string>>;
  datsReports: Chat[];
}

export interface IPropsWrappeReport {
  isColor?: boolean;
}
