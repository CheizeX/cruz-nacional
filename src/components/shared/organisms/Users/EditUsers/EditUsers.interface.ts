export interface IEditUsersProps {
  firstName: string;
  userModal?: boolean;
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  openNewSection?: string;
  setOpenNewSection: React.Dispatch<React.SetStateAction<string>>;
  setUserActive: React.Dispatch<React.SetStateAction<number>>;
  userActive?: number;
  setUsers: React.Dispatch<React.SetStateAction<string>>;
  users?: string;
}
export interface IButtonProp {
  focusedCheck?: boolean;
}
