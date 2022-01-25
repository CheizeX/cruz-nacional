/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserByIdEmailSlice {
  userByInfoEmail: string;
}

const initialState: IUserByIdEmailSlice = {
  userByInfoEmail: '',
};

export const userSeletedInfoEmailStore = createSlice({
  name: 'userByInfoEmailState',
  initialState,
  reducers: {
    setUserByInfoEmail: (state, action: PayloadAction<string>) => {
      state.userByInfoEmail = action.payload;
    },
  },
});

export const { setUserByInfoEmail } = userSeletedInfoEmailStore.actions;
export default userSeletedInfoEmailStore.reducer;
