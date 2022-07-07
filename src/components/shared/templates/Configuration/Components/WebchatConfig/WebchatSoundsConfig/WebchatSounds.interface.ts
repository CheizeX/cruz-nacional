import { Dispatch, SetStateAction } from 'react';

export interface IWrapperWebchatSounds {
  openContainer: boolean;
}

export type IListSounds = {
  [key: string]: HTMLAudioElement;
  notification_sound_1: HTMLAudioElement;
  notification_sound_2: HTMLAudioElement;
  notification_sound_3: HTMLAudioElement;
  notification_sound_4: HTMLAudioElement;
  notification_sound_5: HTMLAudioElement;
  notification_sound_6: HTMLAudioElement;
  notification_sound_7: HTMLAudioElement;
  notification_sound_8: HTMLAudioElement;
  notification_sound_9: HTMLAudioElement;
};
export interface IPropsWebchatSounds {
  soundList: IListSounds;
  customNotificationSound: string;
  isSoundActive: boolean;
  setIsSoundActive: Dispatch<SetStateAction<boolean>>;
  setCustomNotificationSound: Dispatch<SetStateAction<string>>;
  // radioCheckedInCoversation: string;
  // setRadioCheckedInConversation: Dispatch<SetStateAction<string>>;
}
