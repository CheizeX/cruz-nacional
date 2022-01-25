/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

interface IMonitorChatSlice {
  chatsToday: Chat[];
  countOnConversation: number;
  countPending: number;
  countPause: number;
  countFinished: number;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IMonitorChatSlice = {
  chatsToday: [],
  countOnConversation: 0,
  countPending: 0,
  countPause: 0,
  countFinished: 0,
  isLoanding: false,
  error: null,
};

export const monitorManagementStore = createSlice({
  name: 'monitorTodayChatState',
  initialState,
  reducers: {
    setChatsToday: (state, action: PayloadAction<Chat[]>) => {
      state.chatsToday = action.payload;
    },
    setCountPause: (state, action: PayloadAction<number>) => {
      state.countPause = action.payload;
    },
    setCountOnConversation: (state, action: PayloadAction<number>) => {
      state.countOnConversation = action.payload;
    },
    setCountFinished: (state, action: PayloadAction<number>) => {
      state.countFinished = action.payload;
    },
    setCountPending: (state, action: PayloadAction<number>) => {
      state.countPending = action.payload;
    },
  },
});

export const {
  setChatsToday,
  setCountPause,
  setCountOnConversation,
  setCountFinished,
  setCountPending,
} = monitorManagementStore.actions;
export default monitorManagementStore.reducer;
