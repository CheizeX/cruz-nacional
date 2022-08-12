/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DecodedToken } from '../../../models/users/user';

interface LiveChatSliceInterface {
  userDataInState: DecodedToken;
}

const initialState: LiveChatSliceInterface = {
  userDataInState: {} as DecodedToken,
};

export const userDataInState = createSlice({
  name: 'userDataInState',
  initialState,
  reducers: {
    setUserDataInState: (
      state: { userDataInState: DecodedToken },
      action: PayloadAction<DecodedToken>,
    ) => {
      state.userDataInState = action.payload;
    },
    setUpdateDataInState: (
      state: { userDataInState: { urlAvatar: string } },
      action: PayloadAction<string>,
    ) => {
      state.userDataInState.urlAvatar = action.payload;
    },
    setUpdateSoundEnabled: (
      state: { userDataInState: { soundEnabled: boolean } },
      action: PayloadAction<boolean>,
    ) => {
      state.userDataInState.soundEnabled = action.payload;
    },
  },
});

export const {
  setUserDataInState,
  setUpdateDataInState,
  setUpdateSoundEnabled,
} = userDataInState.actions;
export default userDataInState.reducer;
