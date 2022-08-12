/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

interface ChatToSetOnConversationIdInterface {
  chatToSetOnConversationInStateId: string;
  chatByInactivity: Chat;
}

const initialState: ChatToSetOnConversationIdInterface = {
  chatToSetOnConversationInStateId: '',
  chatByInactivity: {} as Chat,
};

export const chatToSetOnConversationToStateId = createSlice({
  name: 'chatToSetOnConversationToStateId',
  initialState,
  reducers: {
    setChatToSetOnConversationInStateId: (
      state: { chatToSetOnConversationInStateId: string },
      action: PayloadAction<string>,
    ) => {
      state.chatToSetOnConversationInStateId = action.payload;
    },
    setChatByInactivity: (
      state: { chatByInactivity: Chat },
      action: PayloadAction<Chat>,
    ) => {
      state.chatByInactivity = action.payload;
    },
  },
});

export const { setChatToSetOnConversationInStateId, setChatByInactivity } =
  chatToSetOnConversationToStateId.actions;
export default chatToSetOnConversationToStateId.reducer;
