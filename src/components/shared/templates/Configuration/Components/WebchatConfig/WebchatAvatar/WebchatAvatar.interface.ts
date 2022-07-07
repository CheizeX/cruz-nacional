export interface IWebchatAvatarProps {
  focused: boolean;
}

export interface ICustomWebchatAvatar {
  setCustomAvatar: React.Dispatch<React.SetStateAction<string>>;
  customAvatar: string;
}
export interface Event<T = EventTarget> {
  target: T;
}
