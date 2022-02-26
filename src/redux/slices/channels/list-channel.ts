/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListChannel } from '../../../models/channels/channel';

interface IIntegrationQRSlice {
  listChannel: ListChannel;
  idChannel: string;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IIntegrationQRSlice = {
  listChannel: {} as ListChannel,
  idChannel: '',
  isLoanding: false,
  error: null,
};

export const listChannelStore = createSlice({
  name: 'listChannelState',
  initialState,
  reducers: {
    setlistChannel: (state, action: PayloadAction<ListChannel>) => {
      state.listChannel = action.payload;
    },
    setIdChannel: (state, action: PayloadAction<string>) => {
      state.idChannel = action.payload;
    },
  },
});

export const { setlistChannel, setIdChannel } = listChannelStore.actions;
export default listChannelStore.reducer;
