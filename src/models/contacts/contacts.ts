import { IPropsChannel } from '../channels/channel';

export interface Contacts {
  _id: string;
  name: string;
  mainNumber: string;
  secondaryNumber: string;
  email: string;
  contactCompanyName: string;
  owner?: string;
  channel: IPropsChannel;
  status: string;
}

export interface StatusProps {
  _id: string;
  name: string;
  color: string;
}
export interface IPropsContacts {
  _id: string;
  name: string;
  mainNumber: string;
  channels: IPropsChannel[];
  secondaryNumber?: string;
  companyId: string;
  email?: string;
  contactCompanyName: string;
  owner: IClient;
  isBusy: boolean;
  status: string;
}

export type IClient = {
  name: string;
  _id: string;
};

export interface IPropsStartConversation {
  content: string;
  contentType: string;
  from: string;
}

export interface IContactInfo {
  name: string;
  mainNumber: string;
  secondaryNumber?: string;
  email?: string;
  contactCompanyName: string;
  status: string;
}
