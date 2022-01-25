/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../models/users/user';

interface IUserSlice {
  datsAgents: User[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IUserSlice = {
  datsAgents: [],

  isLoanding: false,
  error: null,
};

export const reportsDataAgentsStore = createSlice({
  name: 'reportsAgentsQueryState',
  initialState,
  reducers: {
    setDataAgents: (state, action: PayloadAction<User[]>) => {
      state.datsAgents = action.payload;
    },
  },
});

export const { setDataAgents } = reportsDataAgentsStore.actions;
export default reportsDataAgentsStore.reducer;
