/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInstanceQR } from '../../../models/channels/channel-integration-qr';

interface IIntegrationQRSlice {
  dataInfoQR: IInstanceQR[];
  imageQR: string;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IIntegrationQRSlice = {
  dataInfoQR: [],
  imageQR: '',
  isLoanding: false,
  error: null,
};

export const integrationQRStore = createSlice({
  name: 'chatIntegrationQRState',
  initialState,
  reducers: {
    setIntegrationQRWhatsApp: (state, action: PayloadAction<IInstanceQR[]>) => {
      state.dataInfoQR = action.payload;
    },
    setImageQR: (state, action: PayloadAction<any>) => {
      state.imageQR = action.payload;
    },
  },
});

export const { setIntegrationQRWhatsApp, setImageQR } =
  integrationQRStore.actions;
export default integrationQRStore.reducer;
