/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionsToFilterInterface {
  tagsToFilter: string[];
  channelsToFilter: string[];
}

const initialState: OptionsToFilterInterface = {
  tagsToFilter: [],
  channelsToFilter: [],
};

export const optionsToFilter = createSlice({
  name: 'optionsToFilter',
  initialState,
  reducers: {
    setTagsToFilter: (
      state: { tagsToFilter: string[] },
      action: PayloadAction<string[]>,
    ) => {
      state.tagsToFilter = action.payload;
    },
    setChannelsToFilter: (
      state: { channelsToFilter: string[] },
      action: PayloadAction<string[]>,
    ) => {
      state.channelsToFilter = action.payload;
    },
  },
});

export const { setTagsToFilter, setChannelsToFilter } = optionsToFilter.actions;
export default optionsToFilter.reducer;
