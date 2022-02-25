export interface IAvatarProps {
  focused: boolean;
}

export interface ICustomAvatar {
  setCustomAvatar: React.Dispatch<React.SetStateAction<string>>;
  setIsSection: React.Dispatch<React.SetStateAction<number>>;
  setCustomizeMyAvatar: React.Dispatch<React.SetStateAction<boolean>>;
  customAvatar: string;
  customizeMyAvatar: boolean;
}
export interface Event<T = EventTarget> {
  target: T;
}
