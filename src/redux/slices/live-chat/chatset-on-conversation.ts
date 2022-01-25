/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatToSetOnConversationIdInterface {
  chatToSetOnConversationInStateId: string;
}

const initialState: ChatToSetOnConversationIdInterface = {
  chatToSetOnConversationInStateId: '',
};

export const chatToSetOnConversationToStateId = createSlice({
  name: 'chatToSetOnConversationToStateId',
  initialState,
  reducers: {
    setChatToSetOnConversationInStateId: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.chatToSetOnConversationInStateId = action.payload;
    },
  },
});

export const { setChatToSetOnConversationInStateId } =
  chatToSetOnConversationToStateId.actions;
export default chatToSetOnConversationToStateId.reducer;
