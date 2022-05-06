export interface IPropsCreateContacts {
  readListContacts: () => Promise<void>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
