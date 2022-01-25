/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListChannel } from '../../../models/channels/channel';

interface IIntegrationQRSlice {
  listChannel: ListChannel;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IIntegrationQRSlice = {
  listChannel: {} as ListChannel,
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
  },
});

export const { setlistChannel } = listChannelStore.actions;
export default listChannelStore.reducer;
