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
    setChatsOnConversation: (state, action: PayloadAction<Chat[]>) => {
      state.chatsOnConversation = action.payload;
    },
    setSortedByFirstDate: (state) => {
      state.chatsOnConversation = state.chatsOnConversation.sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1,
      );
    },
    setSortedByLastDate: (state) => {
      state.chatsOnConversation = state.chatsOnConversation.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : -1,
      );
    },
  },
});

export const {
  setChatsOnConversation,
  setSortedByFirstDate,
  setSortedByLastDate,
} = chatsOnConversationToState.actions;
export default chatsOnConversationToState.reducer;
