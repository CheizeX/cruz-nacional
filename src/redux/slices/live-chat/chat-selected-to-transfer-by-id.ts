/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LiveChatSliceInterface {
  chatToTransferById: string;
}

const initialState: LiveChatSliceInterface = {
  chatToTransferById: '',
};

export const chatToTransferById = createSlice({
  name: 'chatToTransferById',
  initialState,
  reducers: {
    setChatToTransferById: (state, action: PayloadAction<string>) => {
      state.chatToTransferById = action.payload;
    },
  },
});

export const { setChatToTransferById } = chatToTransferById.actions;
export default chatToTransferById.reducer;
