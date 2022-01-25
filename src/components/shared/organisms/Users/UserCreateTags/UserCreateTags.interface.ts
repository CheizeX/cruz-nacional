export interface ICreateTagProps {
  openNewUser?: string;
  setOpenNewUser: React.Dispatch<React.SetStateAction<string>>;
  sectionModal?: boolean;
  setSectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserActive: React.Dispatch<React.SetStateAction<number>>;
  userActive?: number;
  setUsers: React.Dispatch<React.SetStateAction<string>>;
  users?: string;
  titleHeader?: string;
  containerTags?: IUserPropsTags[];
  setContainerTags: React.Dispatch<React.SetStateAction<IUserPropsTags[]>>;
}
export interface IContainerCreateUserProps {
  color?: string;
}
export interface IUserPropsTags {
  name: string;
  color: string;
  status: boolean;
}
export type Tagsprops = {
  tagsUser: IUserPropsTags[];
};
