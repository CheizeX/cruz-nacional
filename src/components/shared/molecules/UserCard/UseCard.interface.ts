import { Tag } from '../../../../models/tags/tag';

export interface IUserCardMoleculeProps {
  isAdmin?: boolean;
  leftIcon?: () => JSX.Element;
  rightIcon?: () => JSX.Element;
  openNewUser?: string;
  sectionModal?: boolean;
  setOpenNewSection: React.Dispatch<React.SetStateAction<string>>;
  setSectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  userID: string;
  byNameUser: string;
  infoUserEmail: string;
  infoUserRole: string;
  containerTags?: Tag[];
  avatar?: string;
  invitation: boolean;
}

export interface IUserCardContainerProps {
  isAdmin?: boolean;
  invitation: boolean;
}
export interface IContainerTag {
  colorTag: string;
}
