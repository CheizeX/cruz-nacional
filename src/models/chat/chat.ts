import { Tag } from '../tags/tag';
import { User } from '../users/user';

export enum Channels {
  WHATSAPP = 'WhatsApp',
  MESSENGER = 'Messenger',
  INSTAGRAM = 'Instagram',
  WEBCHAT = 'Webchat',
  WASSENGER = 'Wassenger',
  CHAT_API = 'Chat-API',
}

export enum ChatStatus {
  ASSIGNMENT_PENDING = 'ASSIGNMENT_PENDING',
  ON_CONVERSATION = 'ON_CONVERSATION',
  FINISHED = 'FINISHED',
}

export enum ContentType {
  TEXT = 'TEXT',
  ATTACHMENT = 'ATTACHMENT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  FILE = 'FILE',
  INTERACTIVE_LIST = 'INTERACTIVE_LIST',
  INTERACTIVE_BUTTON = 'INTERACTIVE_BUTTON',
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
  content: any;
  contentType: ContentType;
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
  trafficLight?: string;
  isTrafficLight?: boolean;
};

export type IPropsChannel = {
  _id?: string;
  name: string;
  clientId: string;
};

export enum ITrafficLight {
  YELLOW = 'YELLOW',
  RED = 'RED',
  NEUTRO = 'NEUTRO',
}
