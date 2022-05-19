import { User } from '../users/user';

export type Channel = {
  _id: string;
  name: string;
  type: string;
  status: string;
  assignedUsers: User[];
  createdAt: Date;
  updatedAt: Date;
};

export type ListChannel = {
  facebook: IFacebook;
  webchat: IPropsWebChat;
  officialWhatsApp: IOfficialWhatsApp;
  unofficialWhatsApp: IUnOfficialWhatsApp;
  instagram: IPropsInstagram;
  availableChannels: IPropsChannel[];
};

export type IFacebook = {
  accessToken: string;
  image: string;
  pageId: string;
  pageName: string;
  _id: string;
  isActive: boolean;
};

export type IOfficialWhatsApp = {
  apiKey: string;
  isActive: boolean;
  image: string;
  phoneNumber: string;
  providerName: string;
  _id: string;
};

export type IUnOfficialWhatsApp = {
  device: string;
  isActive: boolean;
  image: string;
  phoneNumber: string;
  providerName: string;
  _id: string;
};

export type IPropsOfficialWhatsapp = {
  providerName: string;
  apiKey: string;
  phoneNumber: string;
  isActive?: boolean;
};

export type IPropsWebChat = {
  name: string;
  description: string;
  avatar: string;
  isActive: boolean;
  _id: string;
  scripts: IPropsScripts;
};

export type IPropsScripts = {
  js: string;
  css: string;
  div: string;
};

export type IWebChat = {
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  avatar: string;
  animation: boolean;
};

export type IPropsInstagram = {
  _id: string;
  image: string;
  name: string;
  username: string;
  accessToken: string;
  isActive: boolean;
};

export type IPropsUnOfficialWhatsapp = {
  success: boolean;
  code: number;
  result: string;
};
export interface IPropsChannel {
  name: string;
  clientId: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IchannelId {
  channelId: string;
}
