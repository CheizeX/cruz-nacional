/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITagColor, Tag } from '../../../models/tags/tag';

interface ITagsSlice {
  tagsData: Tag[];
  tagColors: ITagColor[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: ITagsSlice = {
  tagsData: [],
  tagColors: [],
  isLoanding: false,
  error: null,
};

export const tagsManagementStore = createSlice({
  name: 'tagsQueryState',
  initialState,
  reducers: {
    setDataTag: (state: { tagsData: Tag[] }, action: PayloadAction<Tag[]>) => {
      state.tagsData = action.payload;
    },
    setTagColors: (
      state: { tagColors: ITagColor[] },
      action: PayloadAction<ITagColor[]>,
    ) => {
      state.tagColors = action.payload;
    },
  },
});

export const { setDataTag, setTagColors } = tagsManagementStore.actions;
export default tagsManagementStore.reducer;
