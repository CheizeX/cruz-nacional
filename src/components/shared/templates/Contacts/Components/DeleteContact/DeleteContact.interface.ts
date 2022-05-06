export interface IPropsDeleteContact {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  readListContacts: () => Promise<void>;
}
