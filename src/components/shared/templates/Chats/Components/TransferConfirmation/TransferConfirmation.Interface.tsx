export interface TranferConfirmationProps {
  agent: string;
  setLiveChatPage: React.Dispatch<React.SetStateAction<string>>;
  liveChatPage?: string;
  setLiveChatModal: React.Dispatch<React.SetStateAction<boolean>>;
  liveChatModal?: boolean;
}
