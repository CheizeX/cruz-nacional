/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../models/users/user';

interface IMonitorChatSlice {
  allUser: User[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IMonitorChatSlice = {
  allUser: [],
  isLoanding: false,
  error: null,
};

export const allUserStore = createSlice({
  name: 'monitorAllUserState',
  initialState,
  reducers: {
    setAllUser: (state, action: PayloadAction<User[]>) => {
      state.allUser = action.payload;
    },
  },
});

export const { setAllUser } = allUserStore.actions;
export default allUserStore.reducer;
