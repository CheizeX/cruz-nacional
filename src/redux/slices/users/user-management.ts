/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../models/users/user';

interface IUserSlice {
  usersData: User[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IUserSlice = {
  usersData: [],
  isLoanding: false,
  error: null,
};

export const userManagementStore = createSlice({
  name: 'useQueryState',
  initialState,
  reducers: {
    setDataUser: (state, action: PayloadAction<User[]>) => {
      state.usersData = action.payload;
    },
  },
});

export const { setDataUser } = userManagementStore.actions;
export default userManagementStore.reducer;
