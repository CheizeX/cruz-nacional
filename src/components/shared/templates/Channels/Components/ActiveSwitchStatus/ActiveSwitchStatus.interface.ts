export interface IActiveSwitchStatus {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  handleActiveSwitch: () => Promise<void>;
}
