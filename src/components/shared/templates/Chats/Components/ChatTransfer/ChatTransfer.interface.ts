export interface IChatTransfer {
  focusedAgents?: boolean;
  setLiveChatModal: React.Dispatch<React.SetStateAction<boolean>>;
  liveChatModal?: boolean;
  setLiveChatPage: React.Dispatch<React.SetStateAction<string>>;
  liveChatPage?: string;
  setAgentTransfer: React.Dispatch<React.SetStateAction<string>>;
}
