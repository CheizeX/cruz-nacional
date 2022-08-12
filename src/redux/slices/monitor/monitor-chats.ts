/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

interface IMonitorChatSlice {
  chatsToday: Chat[];
  infoByChat: Chat;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IMonitorChatSlice = {
  chatsToday: [],
  infoByChat: {} as Chat,
  isLoanding: false,
  error: null,
};

export const monitorManagementStore = createSlice({
  name: 'monitorTodayChatState',
  initialState,
  reducers: {
    setChatsToday: (
      state: { chatsToday: Chat[] },
      action: PayloadAction<Chat[]>,
    ) => {
      state.chatsToday = action.payload;
    },
    setUpdateChat: (state: any, action: PayloadAction<Chat>) => {
      const chatExist = state.chatsToday?.findIndex(
        (item: Chat) => item._id === action.payload?._id,
      );
      if (chatExist !== -1) {
        const cloneChats = [...state.chatsToday];
        cloneChats.splice(chatExist, 1, action.payload);
        return {
          ...state,
          chatsToday: cloneChats,
        };
      }
      if (chatExist === -1) {
        return {
          ...state,
          chatsToday: [action.payload, ...state.chatsToday],
        };
      }
      return { ...state };
    },
    setInfoByChat: (
      state: { infoByChat: Chat },
      action: PayloadAction<Chat>,
    ) => {
      state.infoByChat = action.payload;
    },
    setSortedByFirstDateChats: (state: { chatsToday: Chat[] }) => {
      state.chatsToday = state.chatsToday.sort((a: Chat, b: Chat) =>
        a.createdAt > b.createdAt ? 1 : -1,
      );
    },
    setSortedByLastDateChats: (state: { chatsToday: Chat[] }) => {
      state.chatsToday = state.chatsToday.sort((a: Chat, b: Chat) =>
        a.createdAt < b.createdAt ? 1 : -1,
      );
    },
  },
});

export const {
  setChatsToday,
  setSortedByFirstDateChats,
  setSortedByLastDateChats,
  setUpdateChat,
  setInfoByChat,
} = monitorManagementStore.actions;
export default monitorManagementStore.reducer;
