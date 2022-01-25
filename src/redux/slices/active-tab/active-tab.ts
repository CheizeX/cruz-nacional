/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedTabInterface {
  activeTabInState: string;
}

const initialState: SelectedTabInterface = {
  activeTabInState: '',
};

export const activeTabInState = createSlice({
  name: 'activeTabInState',
  initialState,
  reducers: {
    setActiveTabInState: (state, action: PayloadAction<string>) => {
      state.activeTabInState = action.payload;
    },
  },
});

export const { setActiveTabInState } = activeTabInState.actions;
export default activeTabInState.reducer;
