/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LiveChatSliceInterface {
  userToTransferById: string;
}

const initialState: LiveChatSliceInterface = {
  userToTransferById: '',
};

export const userToTransferById = createSlice({
  name: 'userToTransferById',
  initialState,
  reducers: {
    setUserToTransferById: (
      state: { userToTransferById: string },
      action: PayloadAction<string>,
    ) => {
      state.userToTransferById = action.payload;
    },
  },
});

export const { setUserToTransferById } = userToTransferById.actions;
export default userToTransferById.reducer;
