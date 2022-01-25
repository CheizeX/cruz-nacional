/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

interface IUserSlice {
  datsReports: Chat[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IUserSlice = {
  datsReports: [],
  isLoanding: false,
  error: null,
};

export const reportsManagementStore = createSlice({
  name: 'reportsQueryState',
  initialState,
  reducers: {
    setDataReports: (state, action: PayloadAction<Chat[]>) => {
      state.datsReports = action.payload;
    },
  },
});

export const { setDataReports } = reportsManagementStore.actions;
export default reportsManagementStore.reducer;
