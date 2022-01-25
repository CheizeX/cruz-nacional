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
  officialWhatsApp: IOfficialWhatsApp;
  unofficialWhatsApp: IOfficialWhatsApp;
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
