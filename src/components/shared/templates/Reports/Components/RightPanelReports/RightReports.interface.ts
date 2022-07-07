import React from 'react';
import { Chat } from '../../../../../../models/chat/chat';

export interface IPropsRightReport {
  handleDownload: (extension: string) => void | Promise<void>;
  onChangeReports: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setIsModalConversationInReports: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setClientIdInReports: React.Dispatch<React.SetStateAction<string>>;
  datsReports: Chat[];
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  isHasMore: boolean;
  total: number;
  isSearch: string;
  handleSearch: () => void | Promise<void>;
  handleToggle: () => void | Promise<void>;
  setAllData: (value: React.SetStateAction<never[]>) => void;
}

export interface IPropsWrappeReport {
  isColor?: boolean;
}
export interface IPropsInput {
  focusInput: boolean;
}
