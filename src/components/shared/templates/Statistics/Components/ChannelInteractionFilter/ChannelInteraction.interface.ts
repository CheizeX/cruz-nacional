export interface IChannelInteraction {
  setFilterChannel: React.Dispatch<React.SetStateAction<string>>;
}

export const DataChannels = [
  {
    id: 11,
    name: 'WhatsApp',
    icon: 'whatsapp',
    channel: 'WhatsApp',
  },
  {
    id: 22,
    name: 'Messenger',
    icon: 'messenger',
    channel: 'Messenger',
  },
  {
    id: 33,
    name: 'Instagram',
    icon: 'instagram',
    channel: 'Instagram',
  },
  {
    id: 44,
    name: 'WebChat',
    icon: 'webchat',
    channel: 'Webchat',
  },
];
export type IDataChannel = {
  [key: string]: string;
  WhatsApp: string;
  Messenger: string;
  Webchat: string;
  Wassenger: string;
  Chat_API: string;
};
