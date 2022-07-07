export interface IWrapperPredefinedSound {
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
export interface IPropsPredefinedSound {
  soundList: IListSounds;
}
