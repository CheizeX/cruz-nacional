/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsInstagram } from '../../../models/channels/channel';

interface IAuthFacebookSlice {
  dataInfoInstagram: IPropsInstagram;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IAuthFacebookSlice = {
  dataInfoInstagram: {
    name: '',
    image: '',
    _id: '',
    isActive: false,
    accessToken: '',
    username: '',
  },
  isLoanding: false,
  error: null,
};

export const accountInstagramStore = createSlice({
  name: 'chatContainerAccountInstagramState',
  initialState,
  reducers: {
    setAccountInstagram: (state, action: PayloadAction<IPropsInstagram>) => {
      state.dataInfoInstagram = action.payload;
    },
  },
});

export const { setAccountInstagram } = accountInstagramStore.actions;
export default accountInstagramStore.reducer;
