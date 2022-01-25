import { FC } from 'react';
import { User } from '../../../../../models/users/user';

export interface IUserCreateProps {
  onClick?: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  NotificationUsers?: FC;
  editButton: string;
  titleHeader: string;
  userModal?: boolean;
  openNewUser?: string;
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNewUser: React.Dispatch<React.SetStateAction<string>>;
  setUserActive: React.Dispatch<React.SetStateAction<number>>;
  userActive?: number;
  setUsers: React.Dispatch<React.SetStateAction<string>>;
  users?: string;
  setContainerTags: React.Dispatch<React.SetStateAction<IPropsTags[]>>;
  containerTags: IPropsTags[];
}
export interface ICreateUserProps {
  onSubmit?: (userData: Omit<User, '_id'>) => void | Promise<void>;
}
export interface IPropsTags {
  name: string;
  color: string;
  status: boolean;
}
export type Tagsprops = {
  tagsUser: IPropsTags[];
};
