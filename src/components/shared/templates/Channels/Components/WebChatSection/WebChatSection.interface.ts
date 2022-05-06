export interface IPropsWebChat {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  getChannelList: () => Promise<void>;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
}
export interface IContainerWebChat {
  isSection: number;
}
