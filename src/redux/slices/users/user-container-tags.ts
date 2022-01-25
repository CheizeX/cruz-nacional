/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tag } from '../../../models/tags/tag';

interface IUserSlice {
  usersContainerTag: Tag[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IUserSlice = {
  usersContainerTag: [],
  isLoanding: false,
  error: null,
};

export const userContainerTagStore = createSlice({
  name: 'userContainerTagState',
  initialState,
  reducers: {
    setLoanding: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoanding = payload;
    },
    setDataInfoTag: (state, action: PayloadAction<Tag[]>) => {
      state.usersContainerTag = action.payload;
    },
  },
});

export const { setDataInfoTag, setLoanding } = userContainerTagStore.actions;
export default userContainerTagStore.reducer;
