export interface IEndChatConfirmationProps {
  setLiveChatModal: React.Dispatch<React.SetStateAction<boolean>>;
  liveChatModal?: boolean;
  setOpenEndChat: React.Dispatch<React.SetStateAction<boolean>>;
  handleFinishedChat: () => void;
  // submitForm?: (() => Promise<void>) & (() => Promise<any>);
}
