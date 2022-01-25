import { Channel } from '../../models/channels/channel';
import {
  IReceiveAuthFacebook,
  IConfirmAuthFacebook,
} from '../../models/channels/channel-auth-facebook';
import { IInstanceQR } from '../../models/channels/chennel-integration-qr';
import { baseRestApi } from '../base';

export const createChannel = (channelData: Omit<Channel, '_id'>) => {
  return baseRestApi.post<Channel>('/channels', channelData);
};

export const readChannels = () => {
  return baseRestApi.get<Channel[]>(`/channels`);
};

export const updateChannel = (
  channelId: string,
  channelData: Partial<Omit<Channel, '_id'>>,
) => {
  return baseRestApi.patch<Channel>(`/channels/${channelId}`, channelData);
};

export const deleteChannel = (channelId: string) => {
  return baseRestApi.delete<boolean>(`/channels/${channelId}`);
};

export const authFacebook = (userToken: string) => {
  return baseRestApi.get<IReceiveAuthFacebook[]>(
    `/messenger/getFbPages?userAccessToken=${userToken}`,
  );
};

export const sendAuthFacebook = (data: IConfirmAuthFacebook) => {
  return baseRestApi.post<IConfirmAuthFacebook>(
    '/messenger/setAppInPage',
    data,
  );
};

export const getInstanceQR = () => {
  return baseRestApi.get<IInstanceQR[]>('/whatsapp360/getInstanceChatApi');
};

export const getAllChannel = () => {
  return baseRestApi.get<[]>('/channelsCredentials/');
};
