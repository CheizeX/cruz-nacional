/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsChannel } from '../../../models/chat/chat';

interface IContactsSlice {
  dataChannel: IPropsChannel[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IContactsSlice = {
  dataChannel: [],
  isLoanding: false,
  error: null,
};

export const ContactsStore = createSlice({
  name: 'contactsState',
  initialState,
  reducers: {
    setChannelContacts: (state, action: PayloadAction<IPropsChannel[]>) => {
      state.dataChannel = action.payload;
    },
  },
});

export const { setChannelContacts } = ContactsStore.actions;
export default ContactsStore.reducer;
