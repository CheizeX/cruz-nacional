/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tag } from '../../../models/tags/tag';

interface IUpdateContainerTagSlice {
  updateContainerTags: Tag[];
  observeChange: Tag[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IUpdateContainerTagSlice = {
  updateContainerTags: [],
  observeChange: [],
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
    setObserveChange: (state, action: PayloadAction<Tag[]>) => {
      state.observeChange = action.payload;
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
  setObserveChange,
} = updateContainerTagStore.actions;
export default updateContainerTagStore.reducer;
