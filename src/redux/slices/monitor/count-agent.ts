/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMonitorAgentsAvailableSlice {
  countAgent: number;
}

const initialState: IMonitorAgentsAvailableSlice = {
  countAgent: 0,
};

export const monitorCountAgentStore = createSlice({
  name: 'monitorCountAgentsAvailableState',
  initialState,
  reducers: {
    setCountAgentsAvailable: (state, action: PayloadAction<number>) => {
      state.countAgent = action.payload;
    },
  },
});

export const { setCountAgentsAvailable } = monitorCountAgentStore.actions;
export default monitorCountAgentStore.reducer;
