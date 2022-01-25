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
    setChatsPendings: (state, action: PayloadAction<Chat[]>) => {
      state.chatsPendings = action.payload;
    },
    setSortedByFirstDate: (state) => {
      state.chatsPendings = state.chatsPendings.sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1,
      );
    },
    setSortedByLastDate: (state) => {
      state.chatsPendings = state.chatsPendings.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : -1,
      );
    },
  },
});

export const { setChatsPendings, setSortedByFirstDate, setSortedByLastDate } =
  chatsPendingsToState.actions;
export default chatsPendingsToState.reducer;
