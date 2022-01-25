/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LiveChatSliceInterface {
  chatSelectedToSendId: string;
}

const initialState: LiveChatSliceInterface = {
  chatSelectedToSendId: '',
};

export const chatsToSendId = createSlice({
  name: 'chatsToSendId',
  initialState,
  reducers: {
    setChatsToSendId: (state, action: PayloadAction<string>) => {
      state.chatSelectedToSendId = action.payload;
    },
  },
});

export const { setChatsToSendId } = chatsToSendId.actions;
export default chatsToSendId.reducer;
