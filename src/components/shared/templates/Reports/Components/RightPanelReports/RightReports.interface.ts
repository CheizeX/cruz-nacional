import { Chat } from '../../../../../../models/chat/chat';

export interface IPropsRightReport {
  handleDownload: (extension: string) => void | Promise<void>;
  onChangeReports: (event: React.ChangeEvent<HTMLInputElement>) => void;
  datsReports: Chat[];
}

export interface IPropsWrappeReport {
  isColor?: boolean;
}
