export type IPropsUser = {
  chatId: string;
  agentId: string;
  agentName: string;
  user: IUsers;
  channel: string;
  total: number;
};
export type IUsers = {
  id: string;
  name: string;
};
export type IAllUsers = {
  userId: string;
  userName: string;
  agentId: string;
  agentName: string;
};

export interface IUserList {
  data: IAllUsers[];
  quantity: number;
}

export interface IStatistics {
  quantity: number;
  users: IPropsUser[];
  _id: string;
}

export interface IHoursChart {
  WhatsApp: number;
  'CHAT-API': number;
  Webchat: number;
  Messenger: number;
  Instagram: number;
  total: number;
  _id: number;
}
