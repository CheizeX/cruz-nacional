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
    setUserDataInState: (state, action: PayloadAction<DecodedToken>) => {
      state.userDataInState = action.payload;
    },
    setUpdateDataInState: (state, action: PayloadAction<string>) => {
      state.userDataInState.urlAvatar = action.payload;
    },
  },
});

export const { setUserDataInState, setUpdateDataInState } =
  userDataInState.actions;
export default userDataInState.reducer;
