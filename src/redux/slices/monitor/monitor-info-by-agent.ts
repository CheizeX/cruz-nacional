/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../models/users/user';

interface IInfoByAgentSlice {
  infoByAgents: User[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IInfoByAgentSlice = {
  infoByAgents: [],
  isLoanding: false,
  error: null,
};

export const infoByAgentsStore = createSlice({
  name: 'infoByAgentState',
  initialState,
  reducers: {
    setInfoByAgent: (state, action: PayloadAction<User[]>) => {
      state.infoByAgents = action.payload;
    },
  },
});

export const { setInfoByAgent } = infoByAgentsStore.actions;
export default infoByAgentsStore.reducer;
