/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

interface HistorySliceInterface {
  idClient: string;
  idChannel: string;
  chatHistory: Chat[];
  hasHistory: boolean;
  pendingSession: boolean;
}

const initialState: HistorySliceInterface = {
  idClient: '',
  idChannel: '',
  chatHistory: [],
  hasHistory: false,
  pendingSession: false,
};

export const chatsHistoryStore = createSlice({
  name: 'chatsHistoryState',
  initialState,
  reducers: {
    setChatsIdClient: (state, action: PayloadAction<string>) => {
      state.idClient = action.payload;
    },
    setChatsIdChannel: (state, action: PayloadAction<string>) => {
      state.idChannel = action.payload;
    },
    setChatsHistory: (state, action: PayloadAction<Chat[]>) => {
      state.chatHistory = action.payload;
    },
    setChatsHasHistory: (state, action: PayloadAction<boolean>) => {
      state.hasHistory = action.payload;
    },
    setPendingSession: (state, action: PayloadAction<boolean>) => {
      state.pendingSession = action.payload;
    },
  },
});

export const {
  setChatsIdClient,
  setChatsIdChannel,
  setChatsHistory,
  setChatsHasHistory,
  setPendingSession,
} = chatsHistoryStore.actions;
export default chatsHistoryStore.reducer;
