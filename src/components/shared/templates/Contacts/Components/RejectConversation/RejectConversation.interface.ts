export interface IRejectConversation {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  conversationStartError: boolean;
}

export interface IContainerReject {
  conversationStartError: boolean;
}
