/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IComponentSectonSlice {
  componentsSection: string;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IComponentSectonSlice = {
  componentsSection: 'Chat',
  isLoanding: false,
  error: null,
};

export const componentsSectionStore = createSlice({
  name: 'componentsSectionState',
  initialState,
  reducers: {
    setComponentSection: (state, action: PayloadAction<string>) => {
      state.componentsSection = action.payload;
    },
  },
});

export const { setComponentSection } = componentsSectionStore.actions;
export default componentsSectionStore.reducer;
