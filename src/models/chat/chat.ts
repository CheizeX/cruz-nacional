import { Tag } from '../tags/tag';
import { User } from '../users/user';

export enum Channels {
  WHATSAPP = 'WhatsApp',
  MESSENGER = 'Messenger',
  INSTAGRAM = 'Instagram',
  WEBCHAT = 'Webchat',
}

export enum ChatStatus {
  ASSIGNMENT_PENDING = 'ASSIGNMENT_PENDING',
  ON_CONVERSATION = 'ON_CONVERSATION',
  FINISHED = 'FINISHED',
}

export type StatusChats = {
  name: string;
  index: number;
};

export type Review = {
  _id: string;
  satisfactory: string;
  unsatisfactory: string;
};

export enum ChatFinishedStatus {
  SATISFACTORY = 'SATISFACTORY',
  UNSATISFACTORY = 'UNSATISFACTORY',
}

export type FinishedStatus = {
  finishedStatus: ChatFinishedStatus;
  feedback: string;
};

export type Client = {
  _id: string;
  clientId: string;
  name: string;
  profilePic?: string;
};

export type Message = {
  from: string;
  content: string;
  contentType: string;
  createdAt: Date;
  updatedAt: Date;
  size?: string;
  isDeleted?: boolean;
  _id?: string;
  mid?: string;
};

export type Chat = {
  _id: string;
  channel: Channels;
  client: Client;
  status: ChatStatus;
  companyId: string;
  fromLaravel: boolean;
  assignedAgent: User;
  messages: Message[];
  tags: Tag[];
  isTransfer: boolean;
  isPaused: boolean;
  unreadMessages: number;
  selected: boolean;
  createdAt: Date;
  updatedAt: Date;
  finishedStatus?: ChatFinishedStatus;
  feedback?: string;
  hasHistory?: boolean;
};
