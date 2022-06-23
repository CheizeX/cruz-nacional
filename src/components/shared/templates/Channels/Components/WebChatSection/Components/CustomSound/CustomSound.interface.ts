import { IListSounds } from '../../../../../Configuration/Components/UsersConfig/PredefinedSounds/PredefinedSounds.interface';

export interface ICustomSound {
  soundList: IListSounds;
  activeSound: boolean;
  notificationSound: string;
  setIsActiveSound: React.Dispatch<React.SetStateAction<boolean>>;
  setNotificationSound: React.Dispatch<React.SetStateAction<string>>;
}
