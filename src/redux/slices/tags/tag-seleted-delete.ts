/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITagsByIdDelete {
  tagDeleteById: string;
}

const initialState: ITagsByIdDelete = {
  tagDeleteById: '',
};

export const tagsSeletedDelete = createSlice({
  name: 'tagDeleteByIdState',
  initialState,
  reducers: {
    setTagByIdDelete: (state, action: PayloadAction<string>) => {
      state.tagDeleteById = action.payload;
    },
  },
});

export const { setTagByIdDelete } = tagsSeletedDelete.actions;
export default tagsSeletedDelete.reducer;
