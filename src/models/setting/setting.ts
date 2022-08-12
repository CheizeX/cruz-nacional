export interface ISendSound {
  pendingSound: string;
  conversationSound: string;
  isActive: boolean;
}
export type ISounds = {
  pendingSound: string;
  isActive: boolean;
  conversationSound: string;
};
export interface IPropsSound {
  notificationSounds: ISounds;
}

export interface IPropsPredefinedResponse {
  _id: string;
  title: string;
  content: string;
}
