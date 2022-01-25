/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tag } from '../../../models/tags/tag';

interface IUpdateContainerTagSlice {
  updateContainerTags: Tag[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IUpdateContainerTagSlice = {
  updateContainerTags: [],
  isLoanding: false,
  error: null,
};

export const updateContainerTagStore = createSlice({
  name: 'updateContainerTagState',
  initialState,
  reducers: {
    setUpdateContainerTag: (state, action: PayloadAction<Tag[]>) => {
      state.updateContainerTags = action.payload;
    },
    setNewtagsContainer: (state, action: PayloadAction<Tag>) => {
      const duplicated = state.updateContainerTags.find(
        (item) => item._id === action.payload._id,
      );
      if (!duplicated) {
        return {
          ...state,
          updateContainerTags: [action.payload, ...state.updateContainerTags],
        };
      }
      return { ...state };
    },
    setDeleteTagContainer: (state, action: PayloadAction<string>) => {
      const updateContainerTag = state.updateContainerTags.filter(
        (item) => item._id !== action.payload,
      );
      return { ...state, updateContainerTags: [...updateContainerTag] };
    },
  },
});

export const {
  setUpdateContainerTag,
  setNewtagsContainer,
  setDeleteTagContainer,
} = updateContainerTagStore.actions;
export default updateContainerTagStore.reducer;
