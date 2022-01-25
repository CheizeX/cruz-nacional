export interface IEndChatProps {
  setLiveChatModal: React.Dispatch<React.SetStateAction<boolean>>;
  liveChatModal?: boolean;
}

export interface IEndChatContainer {
  openEndChat?: boolean;
}
