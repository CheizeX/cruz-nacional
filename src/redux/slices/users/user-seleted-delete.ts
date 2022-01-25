/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserByIdDeleteSlice {
  userByIdDelete: string;
}

const initialState: IUserByIdDeleteSlice = {
  userByIdDelete: '',
};

export const userSeletedDelete = createSlice({
  name: 'userByIdDeleteState',
  initialState,
  reducers: {
    setUserByIdDelete: (state, action: PayloadAction<string>) => {
      state.userByIdDelete = action.payload;
    },
  },
});

export const { setUserByIdDelete } = userSeletedDelete.actions;
export default userSeletedDelete.reducer;
