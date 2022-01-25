export interface IEndChatConfirmationProps {
  setLiveChatModal: React.Dispatch<React.SetStateAction<boolean>>;
  liveChatModal?: boolean;
  setOpenEndChat: React.Dispatch<React.SetStateAction<boolean>>;
  submitForm?: (() => Promise<void>) & (() => Promise<any>);
}
