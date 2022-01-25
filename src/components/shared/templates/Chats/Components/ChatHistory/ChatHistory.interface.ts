export interface IHistoryChatStyled {
  focusedChats?: boolean;
}
export interface IChatHistoryProps {
  setLiveChatModal: React.Dispatch<React.SetStateAction<boolean>>;
  liveChatModal?: boolean;
  setIsChannelChat: React.Dispatch<React.SetStateAction<string>>;
  setIsContentChat: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IContainerHistory {
  isFocusWord: boolean;
}

export type IPropsContent = {
  contentChat: string;
  channelChat: string;
  _idChat: string;
};
