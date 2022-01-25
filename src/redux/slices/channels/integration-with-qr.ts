/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInstanceQR } from '../../../models/channels/chennel-integration-qr';

interface IIntegrationQRSlice {
  dataInfoQR: IInstanceQR[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IIntegrationQRSlice = {
  dataInfoQR: [],
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
  },
});

export const { setIntegrationQRWhatsApp } = integrationQRStore.actions;
export default integrationQRStore.reducer;
