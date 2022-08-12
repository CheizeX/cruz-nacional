/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

interface LiveChatSliceInterface {
  chatsOnConversation: Chat[];
}

const initialState: LiveChatSliceInterface = {
  chatsOnConversation: [],
};

export const chatsOnConversationToState = createSlice({
  name: 'chatsOnConversationToState',
  initialState,
  reducers: {
    setChatsOnConversation: (
      state: { chatsOnConversation: Chat[] },
      action: PayloadAction<Chat[]>,
    ) => {
      state.chatsOnConversation = action.payload;
    },

    setOneChatOnConversation: (
      state: { chatsOnConversation: Chat[] },
      action: PayloadAction<Chat>,
    ) => {
      if (
        state?.chatsOnConversation?.find(
          (chat) => chat._id === action.payload._id,
        )
      ) {
        state.chatsOnConversation = state.chatsOnConversation.filter(
          (chat) => chat._id !== action.payload._id,
        );
        state.chatsOnConversation = [
          (state.chatsOnConversation[
            state.chatsOnConversation.findIndex(
              (chat) => chat._id === action.payload._id,
            )
          ] = action.payload),
          ...state.chatsOnConversation,
        ];
      } else {
        state.chatsOnConversation = [
          action.payload,
          ...state.chatsOnConversation,
        ];
      }
    },

    removeOneChatFromOnConversation: (
      state: { chatsOnConversation: Chat[] },
      action: PayloadAction<string>,
    ) => {
      state.chatsOnConversation = state.chatsOnConversation.filter(
        (chat) => chat._id !== action.payload,
      );
    },

    setUnreadedChatsOnConversation: (
      state: { chatsOnConversation: Chat[] },
      action: PayloadAction<Chat>,
    ) => {
      state.chatsOnConversation = state.chatsOnConversation.filter(
        (chat) => chat._id !== action.payload._id,
      );
      state.chatsOnConversation.forEach((chat) => {
        chat.selected = false;
      });
      state.chatsOnConversation = [
        (state.chatsOnConversation[
          state.chatsOnConversation.findIndex(
            (chat) => chat._id === action.payload._id,
          )
        ] = action.payload),
        ...state.chatsOnConversation,
      ];
    },

    setSortedByFirstDate: (state: { chatsOnConversation: any[] }) => {
      state.chatsOnConversation = state.chatsOnConversation.sort(
        (a: { createdAt: number }, b: { createdAt: number }) =>
          a.createdAt > b.createdAt ? 1 : -1,
      );
    },

    setSortedByLastDate: (state: { chatsOnConversation: any[] }) => {
      state.chatsOnConversation = state.chatsOnConversation.sort(
        (a: { createdAt: number }, b: { createdAt: number }) =>
          a.createdAt < b.createdAt ? 1 : -1,
      );
    },
  },
});

export const {
  setChatsOnConversation,
  setOneChatOnConversation,
  removeOneChatFromOnConversation,
  setUnreadedChatsOnConversation,
  setSortedByFirstDate,
  setSortedByLastDate,
} = chatsOnConversationToState.actions;
export default chatsOnConversationToState.reducer;
