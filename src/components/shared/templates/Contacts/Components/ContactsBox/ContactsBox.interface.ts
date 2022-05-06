import { IPropsContacts } from '../../../../../../models/contacts/contacts';

export interface IContactsProps {
  dataContacts: IPropsContacts[];
  conversationStartError: boolean;
  setSelectedContact: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedByClient: React.Dispatch<React.SetStateAction<IPropsClient>>;
}

export interface IPropsClient {
  contactId: string;
  secondaryContact: string;
  name: string;
}
