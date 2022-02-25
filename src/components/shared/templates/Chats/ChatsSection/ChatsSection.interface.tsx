import { SetStateAction } from 'react';

export interface SelectedUserProps {
  setUserSelected: React.Dispatch<React.SetStateAction<string>>;
  userSelected?: string;
}
export interface SortUsers {
  setSortedChats: React.Dispatch<React.SetStateAction<boolean>>;
  sortedChats?: boolean;
}
export interface ChatsListHeaderProps {
  isPendings?: boolean;
}
export interface StyledLabelProps {
  label?: string;
  name?: string;
  color?: string;
}
export interface SortingProps {
  setSortedChats: React.Dispatch<React.SetStateAction<boolean>>;
  sortedChats?: boolean;
}

export interface ShowOnlyPaused {
  showOnlyPausedChats: boolean;
  setShowOnlyPausedChats: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MessagesViewedOrNot {
  newMessagesInChat: {
    key: string;
    messageLength: number;
  };
  setNewMessagesInChat: React.Dispatch<
    React.SetStateAction<{
      key: string;
      messageLength: number;
    }>
  >;
}

// TYPE para las funciones de busqueda por nombre y rut
export interface IPropsSearchByName {
  onChangeSearchName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IPropsStringName {
  searchByName: string;
}

export interface TabProps {
  setActiveByDefaultTab: React.Dispatch<SetStateAction<number>>;
  activeByDefaultTab?: number;
}
export interface Objeto {
  name?: string;
  text?: string;
  minutes?: string;
  label?: string;
  number?: string;
  phone: string;
  isInConversation: boolean;
  type?: string;
  size?: number;
}
export interface StyledPendingWrapperProps {
  focusedItem?: boolean;
  pausedItem?: boolean;
}

export interface StyledOnConversationWrapperProps {
  deletedMessage: boolean;
}

export interface ILiveChatModalProps {
  setLiveChatModal: React.Dispatch<React.SetStateAction<boolean>>;
  liveChatModal?: boolean;
  setLiveChatPage: React.Dispatch<React.SetStateAction<string>>;
  liveChatPage?: string;
}
export interface ChatInputDialogueProps {
  setChatInputDialogue: React.Dispatch<React.SetStateAction<string>>;
  chatInputDialogue?: string;
}
export interface DropZoneDisplayedProps {
  setDropZoneDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
  dropZoneDisplayed?: boolean;
}
export interface Emojis {
  emojisDisplayed: boolean;
  setEmojisDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface PredefinidedTextsInterface {
  showPredefinedTexts: boolean;
  setShowPredefinedTexts: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FindDialogueInChatInterface {
  findDialogueInChat: string;
  setFindDialogueInChat: React.Dispatch<React.SetStateAction<string>>;
}
