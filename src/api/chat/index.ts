import { Chat, FinishedStatus } from '../../models/chat/chat';
import { ISendSound } from '../../models/setting/setting';
import { baseRestApi } from '../base';

export const createChat = (chatData: Omit<Chat, '_id'>) => {
  return baseRestApi.post<Chat>('/chats', chatData);
};
export const readChat = (id: string) => {
  return baseRestApi.get<Chat>(`/chats/${id}`);
};

export const getChatByStatus = (status: string) => {
  return baseRestApi.get<Chat[]>(`/chats/status/${status}`);
};

export const updateChat = (
  chatId: string,
  chatData: Partial<Omit<Chat, '_id'>>,
) => {
  return baseRestApi.patch<Chat>(`/chats/${chatId}`, chatData);
};

export const deleteChat = (chatId: string) => {
  return baseRestApi.delete<boolean>(`/chats/${chatId}`);
};

export const endChat = async (
  chatId: string,
  chatData: Partial<FinishedStatus>,
) => {
  return baseRestApi.patch<Chat>(
    `/chats/finishConversation/${chatId}`,
    chatData,
  );
};

export const initConversation = (chatId: string, chatData: Partial<Chat>) => {
  return baseRestApi.patch<Chat>(`/chats/initConversation/${chatId}`, chatData);
};

export const transferConversation = async (chatId: string, userId: string) => {
  return baseRestApi.patch<Chat>(
    `/chats/transferConversation/${chatId}/${userId}`,
    {},
  );
};

export const readChatsToday = async (date: string) => {
  return baseRestApi.get<Chat>(
    `/chats/date/0/${date}/?channels=all&states=all&agents=all`,
  );
};

export const readReviewChats = async (
  startDate: string,
  endDate: string,
  filter = 'all',
) => {
  return baseRestApi.get<Chat>(
    `/chats/statistics/finishedChats/${startDate}/${endDate}?filter=${filter}`,
  );
};

export const readHistoryChat = async (
  channel: string,
  idClient: string,
  data: string,
) => {
  return baseRestApi.get<Chat | boolean>(
    `/chats/getChatsHistory/${channel}/${idClient}?query=${data}`,
  );
};

export const readSounds = async (sound: string) => {
  return baseRestApi.get<string>(
    `/settings/notificationSounds/?sound=${sound}`,
  );
};
export const setSounds = async (soundData: ISendSound) => {
  return baseRestApi.post<string>('/settings/notificationSounds', soundData);
};

export const updateActiveSound = async () => {
  return baseRestApi.patch<string>('/settings/notificationSounds', {});
};

export const readSetting = async () => {
  return baseRestApi.get<string>('/settings');
};

export const readStatisticsChat = async (
  startDate: string,
  endDate: string,
  channel: string,
) => {
  return baseRestApi.get<string>(
    `chats/statistics/chats/${startDate}/${endDate}?channel=${channel}`,
  );
};

export const readStatisticsUserAndAgent = async (
  startDate: string,
  endDate: string,
  channel: string,
) => {
  return baseRestApi.get<string>(
    `chats/statistics/agents/${startDate}/${endDate}?channel=${channel}`,
  );
};

export const readStatisticsByDay = async (date: string) => {
  return baseRestApi.get<string>(`chats/statistics/hours/${date}`);
};
