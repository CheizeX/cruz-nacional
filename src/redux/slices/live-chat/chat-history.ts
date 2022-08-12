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
    setChatsIdClient: (
      state: { idClient: string },
      action: PayloadAction<string>,
    ) => {
      state.idClient = action.payload;
    },
    setChatsIdChannel: (
      state: { idChannel: string },
      action: PayloadAction<string>,
    ) => {
      state.idChannel = action.payload;
    },
    setChatsHistory: (
      state: { chatHistory: Chat[] },
      action: PayloadAction<Chat[]>,
    ) => {
      state.chatHistory = action.payload;
    },
    setChatsHasHistory: (
      state: { hasHistory: boolean },
      action: PayloadAction<boolean>,
    ) => {
      state.hasHistory = action.payload;
    },
    setPendingSession: (
      state: { pendingSession: boolean },
      action: PayloadAction<boolean>,
    ) => {
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
