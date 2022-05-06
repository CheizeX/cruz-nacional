import { IPropsClient } from '../ContactsBox/ContactsBox.interface';

export interface IStartConversation {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveByDefaultTab: React.Dispatch<React.SetStateAction<number>>;
  setUserSelected: React.Dispatch<React.SetStateAction<string>>;
  selectedByClient: IPropsClient;
}

export interface IContainerStartConversation {
  selectedByChannel: boolean;
  selectStartConversation: boolean;
}
