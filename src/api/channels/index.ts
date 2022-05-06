import {
  Channel,
  IchannelId,
  IPropsInstagram,
  IPropsOfficialWhatsapp,
  IWebChat,
  ListChannel,
} from '../../models/channels/channel';
import {
  IReceiveAuthFacebook,
  IConfirmAuthFacebook,
} from '../../models/channels/channel-auth-facebook';
import { IInstanceQR } from '../../models/channels/channel-integration-qr';
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
  return baseRestApi.delete<ListChannel>(
    `/channelsCredentials/channel/${channelId}`,
  );
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

export const createOfficialWhatsapp = (channelDate: IPropsOfficialWhatsapp) => {
  return baseRestApi.post<IPropsOfficialWhatsapp>(
    '/channelsCredentials/officialWhatsapp',
    channelDate,
  );
};

export const readPageInstagram = (dataInstagram: IPropsInstagram) => {
  return baseRestApi.post<IPropsInstagram>(
    '/channelsCredentials/instagram',
    dataInstagram,
  );
};

export const getNewDevicedIDWassenger = () => {
  return baseRestApi.get<string>('/wassenger/getNewDeviceId');
};

export const getDevicedStatusWassenger = () => {
  return baseRestApi.get<string>('wassenger/deviceAuthorized');
};
export const getWassengerQR = () => {
  return baseRestApi.get<string>(`wassenger/generateQR`);
};
export const readWhatsappDevice = () => {
  return baseRestApi.post<string>('/wassenger/savePhoneAndImage', {});
};

export const resetWassenger = () => {
  return baseRestApi.post<string>('/wassenger/resetSession', {});
};

export const getAllChannel = () => {
  return baseRestApi.get<[]>('/channelsCredentials/');
};
export const getHasPageInstagram = () => {
  return baseRestApi.get<IPropsInstagram[]>('/instagram');
};
export const createWebChat = (data: IWebChat) => {
  return baseRestApi.post<string>('/webchat', data);
};

export const updateActiveSwitchStatus = (data: IchannelId) => {
  return baseRestApi.patch<ListChannel>(
    '/channelsCredentials/switchChannelStatus',
    data,
  );
};

export const requestInstanceChatApi = () => {
  return baseRestApi.post<string>('/chatapi/requestInstance', {});
};

export const readQrCode = () => {
  return baseRestApi.get<string>('/chatapi/getQR');
};

export const savePhoneChatApi = () => {
  return baseRestApi.patch<string>('/chatapi/savePhoneAndImage', {});
};

export const resetPhoneChatApi = () => {
  return baseRestApi.patch<string>('/chatapi/resetPhone', {});
};
