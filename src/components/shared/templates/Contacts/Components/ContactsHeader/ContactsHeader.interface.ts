import { IPropsContacts } from '../../../../../../models/contacts/contacts';

export interface IPropsContactsHeader {
  dataContacts: IPropsContacts[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedContact: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
