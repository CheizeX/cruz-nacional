/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../models/users/user';

interface IMonitorAgentsSlice {
  agentsNotAvailable: User[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IMonitorAgentsSlice = {
  agentsNotAvailable: [],
  isLoanding: false,
  error: null,
};

export const monitorAgentsNotAvailableStore = createSlice({
  name: 'monitorAgentsNotAvailableState',
  initialState,
  reducers: {
    setAgentsNotAvailable: (state, action: PayloadAction<User[]>) => {
      state.agentsNotAvailable = action.payload;
    },
  },
});

export const { setAgentsNotAvailable } = monitorAgentsNotAvailableStore.actions;
export default monitorAgentsNotAvailableStore.reducer;
