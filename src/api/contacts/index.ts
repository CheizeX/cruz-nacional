import {
  Contacts,
  IPropsStartConversation,
} from '../../models/contacts/contacts';
import { baseRestApi } from '../base';

export const createContacts = (contactsData: Omit<Contacts, '_id'>) => {
  return baseRestApi.post<Contacts>('/contacts', contactsData);
};

export const readContacts = () => {
  return baseRestApi.get<Contacts>('/contacts');
};
export const startConversation = (
  clientId: string,
  channel: string,
  dataMessage: Partial<IPropsStartConversation>,
) => {
  return baseRestApi.post<string>(
    `/contacts/${clientId}/sendMessage?channel=${channel}`,
    dataMessage,
  );
};
export const updateContacts = (contactId: string, data: Partial<Contacts>) => {
  return baseRestApi.patch<string>(`/contacts/${contactId}`, data);
};

export const deleteContact = (contactId: string) => {
  return baseRestApi.delete<string>(`/contacts/${contactId}`);
};
