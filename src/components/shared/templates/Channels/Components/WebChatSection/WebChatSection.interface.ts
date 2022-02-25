export interface IPropsWebChat {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  getChannelList: () => Promise<void>;
}
export interface IContainerWebChat {
  isSection: number;
}
