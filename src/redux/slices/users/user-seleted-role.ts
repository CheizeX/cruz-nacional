/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserByInfoRoleSlice {
  currentByUserRole: string;
}

const initialState: IUserByInfoRoleSlice = {
  currentByUserRole: '',
};

export const userSeletedRoleStore = createSlice({
  name: 'currentByUserRoleState',
  initialState,
  reducers: {
    setByUserSeletedRole: (state, action: PayloadAction<string>) => {
      state.currentByUserRole = action.payload;
    },
  },
});

export const { setByUserSeletedRole } = userSeletedRoleStore.actions;
export default userSeletedRoleStore.reducer;
