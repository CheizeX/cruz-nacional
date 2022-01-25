/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReceiveAuthFacebook } from '../../../models/channels/channel-auth-facebook';

interface IAuthFacebookSlice {
  dataInfoFacebook: IReceiveAuthFacebook[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IAuthFacebookSlice = {
  dataInfoFacebook: [],
  isLoanding: false,
  error: null,
};

export const authFacebookStore = createSlice({
  name: 'chatContainerAuthFacebookState',
  initialState,
  reducers: {
    setAuthFacebook: (state, action: PayloadAction<IReceiveAuthFacebook[]>) => {
      state.dataInfoFacebook = action.payload;
    },
  },
});

export const { setAuthFacebook } = authFacebookStore.actions;
export default authFacebookStore.reducer;
