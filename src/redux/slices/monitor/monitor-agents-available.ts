/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../models/users/user';

interface IMonitorAgentsAvailableSlice {
  agentsAvailable: User[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IMonitorAgentsAvailableSlice = {
  agentsAvailable: [],
  isLoanding: false,
  error: null,
};

export const monitorAgentsAvailableStore = createSlice({
  name: 'monitorAgentsAvailableState',
  initialState,
  reducers: {
    setAgentsAvailable: (state, action: PayloadAction<User[]>) => {
      state.agentsAvailable = action.payload;
    },
  },
});

export const { setAgentsAvailable } = monitorAgentsAvailableStore.actions;
export default monitorAgentsAvailableStore.reducer;
