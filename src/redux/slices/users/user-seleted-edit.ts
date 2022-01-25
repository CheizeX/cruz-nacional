/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserByIdEditSlice {
  userByIdEdit: string;
}

const initialState: IUserByIdEditSlice = {
  userByIdEdit: '',
};
export const userSeletedEdit = createSlice({
  name: 'userByIdEditState',
  initialState,
  reducers: {
    setUserByIdEdit: (state, action: PayloadAction<string>) => {
      state.userByIdEdit = action.payload;
    },
  },
});

export const { setUserByIdEdit } = userSeletedEdit.actions;
export default userSeletedEdit.reducer;
