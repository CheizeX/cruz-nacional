export interface IContacts {
  setActiveByDefaultTab: React.Dispatch<React.SetStateAction<number>>;
  activeByDefaultTab?: number;
  setUserSelected: React.Dispatch<React.SetStateAction<string>>;
  userSelected: string;
}
