/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsScripts, ListChannel } from '../../../models/channels/channel';

interface IIntegrationQRSlice {
  listChannel: ListChannel;
  // dataListChannel:
  idActiveChannel: string;
  idChannel: string;
  isLoanding: boolean;
  error: string | null;
  scriptsBuilder: IPropsScripts;
  statusChannel: boolean;
}

const initialState: IIntegrationQRSlice = {
  listChannel: {} as ListChannel,
  idChannel: '',
  idActiveChannel: '',
  isLoanding: false,
  error: null,
  scriptsBuilder: {} as IPropsScripts,
  statusChannel: false,
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
    setScript: (state, action: PayloadAction<IPropsScripts>) => {
      state.scriptsBuilder = action.payload;
    },
    setStatusChannel: (state, action: PayloadAction<boolean>) => {
      state.statusChannel = action.payload;
    },
    setIdActiveChannel: (state, action: PayloadAction<string>) => {
      state.idActiveChannel = action.payload;
    },
  },
});

export const {
  setlistChannel,
  setIdChannel,
  setScript,
  setStatusChannel,
  setIdActiveChannel,
} = listChannelStore.actions;
export default listChannelStore.reducer;
