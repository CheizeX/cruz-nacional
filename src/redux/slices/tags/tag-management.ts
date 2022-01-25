/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tag } from '../../../models/tags/tag';

interface ITagsSlice {
  tagsData: Tag[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: ITagsSlice = {
  tagsData: [],
  isLoanding: false,
  error: null,
};

export const tagsManagementStore = createSlice({
  name: 'tagsQueryState',
  initialState,
  reducers: {
    setDataTag: (state, action: PayloadAction<Tag[]>) => {
      state.tagsData = action.payload;
    },
  },
});

export const { setDataTag } = tagsManagementStore.actions;
export default tagsManagementStore.reducer;
