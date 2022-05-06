// import { IPropsContacts } from '../../../../../../models/contacts/contacts';

export interface IPropEditContact {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  readListContacts: () => Promise<void>;
  // setContactData: React.Dispatch<React.SetStateAction<IPropsContacts[]>>;
}
