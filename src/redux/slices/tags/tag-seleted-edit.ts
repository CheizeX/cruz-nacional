/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITagsByIdEdit {
  tagEditById: string;
  valueTag: string;
  valueColor: string;
}

const initialState: ITagsByIdEdit = {
  tagEditById: '',
  valueTag: '',
  valueColor: '',
};

export const tagsSeletedDelete = createSlice({
  name: 'tagEditByIdState',
  initialState,
  reducers: {
    setTagByIdEdit: (
      state: { tagEditById: string },
      action: PayloadAction<string>,
    ) => {
      state.tagEditById = action.payload;
    },
    setValueTag: (
      state: { valueTag: string },
      action: PayloadAction<string>,
    ) => {
      state.valueTag = action.payload;
    },
    setValueColor: (
      state: { valueColor: string },
      action: PayloadAction<string>,
    ) => {
      state.valueColor = action.payload;
    },
  },
});

export const { setTagByIdEdit, setValueTag, setValueColor } =
  tagsSeletedDelete.actions;
export default tagsSeletedDelete.reducer;
