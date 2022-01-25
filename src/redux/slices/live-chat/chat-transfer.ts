/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

interface IChatsTransferSlice {
  chatsTransfer: Chat[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IChatsTransferSlice = {
  chatsTransfer: [],
  isLoanding: false,
  error: null,
};

export const chatsTransferStore = createSlice({
  name: 'chatsTodayTransferState',

  initialState,
  reducers: {
    setChatsTransfer: (state, action: PayloadAction<Chat[]>) => {
      state.chatsTransfer = action.payload;
    },
  },
});

export const { setChatsTransfer } = chatsTransferStore.actions;
export default chatsTransferStore.reducer;
