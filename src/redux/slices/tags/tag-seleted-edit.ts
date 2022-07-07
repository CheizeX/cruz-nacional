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
    setTagByIdEdit: (state, action: PayloadAction<string>) => {
      state.tagEditById = action.payload;
    },
    setValueTag: (state, action: PayloadAction<string>) => {
      state.valueTag = action.payload;
    },
    setValueColor: (state, action: PayloadAction<string>) => {
      state.valueColor = action.payload;
    },
  },
});

export const { setTagByIdEdit, setValueTag, setValueColor } =
  tagsSeletedDelete.actions;
export default tagsSeletedDelete.reducer;
