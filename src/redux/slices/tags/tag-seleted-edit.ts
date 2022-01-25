/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITagsByIdEdit {
  tagEditById: string;
}

const initialState: ITagsByIdEdit = {
  tagEditById: '',
};

export const tagsSeletedDelete = createSlice({
  name: 'tagEditByIdState',
  initialState,
  reducers: {
    setTagByIdEdit: (state, action: PayloadAction<string>) => {
      state.tagEditById = action.payload;
    },
  },
});

export const { setTagByIdEdit } = tagsSeletedDelete.actions;
export default tagsSeletedDelete.reducer;
