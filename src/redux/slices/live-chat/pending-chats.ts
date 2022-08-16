/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

export interface LiveChatSliceInterface {
  chatsPendings: Chat[];
}

const initialState: LiveChatSliceInterface = {
  chatsPendings: [],
};

export const chatsPendingsToState = createSlice({
  name: 'chatsPendingsToState',
  initialState,
  reducers: {
    setChatsPendings: (
      state: { chatsPendings: Chat[] },
      action: PayloadAction<Chat[]>,
    ) => {
      state.chatsPendings = action.payload;
    },

    setOneChatPending: (
      state: { chatsPendings: Chat[] },
      action: PayloadAction<Chat>,
    ) => {
      if (
        state?.chatsPendings?.find((chat) => chat._id === action.payload._id)
      ) {
        state.chatsPendings = state.chatsPendings.filter(
          (chat) => chat._id !== action.payload._id,
        );
        state.chatsPendings = [
          (state.chatsPendings[
            state.chatsPendings.findIndex(
              (chat) => chat._id === action.payload._id,
            )
          ] = action.payload),
          ...state.chatsPendings,
        ];
      } else {
        state.chatsPendings = [action.payload, ...state.chatsPendings];
      }
    },
    removeOneChatPending: (
      state: { chatsPendings: Chat[] },
      action: PayloadAction<string>,
    ) => {
      state.chatsPendings = state.chatsPendings.filter(
        (chat) => chat._id !== action.payload,
      );
    },

    setSortedByFirstDate: (state: { chatsPendings: any[] }) => {
      state.chatsPendings = state.chatsPendings.sort(
        (a: { createdAt: number }, b: { createdAt: number }) =>
          a.createdAt > b.createdAt ? 1 : -1,
      );
    },

    setSortedByLastDate: (state: { chatsPendings: any[] }) => {
      state.chatsPendings = state.chatsPendings.sort(
        (a: { createdAt: number }, b: { createdAt: number }) =>
          a.createdAt < b.createdAt ? 1 : -1,
      );
    },
  },
});

export const {
  setChatsPendings,
  setOneChatPending,
  removeOneChatPending,
  setSortedByFirstDate,
  setSortedByLastDate,
} = chatsPendingsToState.actions;
export default chatsPendingsToState.reducer;
