/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IContactInfo,
  IPropsContacts,
} from '../../../models/contacts/contacts';

interface IContactsSlice {
  dataContacts: IPropsContacts[];
  updateContact: IContactInfo;
  contactById: string;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IContactsSlice = {
  dataContacts: [],
  updateContact: {} as IContactInfo,
  contactById: '',
  isLoanding: false,
  error: null,
};

export const ContactsInfoStore = createSlice({
  name: 'contactsInfoState',
  initialState,
  reducers: {
    setInfoContacts: (state, action: PayloadAction<IPropsContacts[]>) => {
      state.dataContacts = action.payload;
    },
    setUpdateContacts: (state, action: PayloadAction<IContactInfo>) => {
      state.updateContact = action.payload;
    },
    setContactById: (state, action: PayloadAction<string>) => {
      state.contactById = action.payload;
    },
  },
});

export const { setInfoContacts, setUpdateContacts, setContactById } =
  ContactsInfoStore.actions;
export default ContactsInfoStore.reducer;
