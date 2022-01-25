export interface IEditTagProps {
  openNewUser?: string;
  setOpenNewUser: React.Dispatch<React.SetStateAction<string>>;
  sectionModal?: boolean;
  setSectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserActive: React.Dispatch<React.SetStateAction<number>>;
  userActive?: number;
  setUsers: React.Dispatch<React.SetStateAction<string>>;
  users?: string;
  titleHeader?: string;
}
export interface IContainerEditUserProps {
  color?: string;
}
