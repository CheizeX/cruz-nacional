export interface IPropsInstagram {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  hasMessengerAccount: boolean;
  getChannelList: () => Promise<void>;
}
export interface IPropsContainer {
  isSectionComponent: number;
}
