/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsPredefinedResponse } from '../../../models/setting/setting';

interface ILibrarySlice {
  libraryMessage: IPropsPredefinedResponse[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ILibrarySlice = {
  libraryMessage: [],
  isLoading: false,
  error: null,
};

export const LibraryMessageStore = createSlice({
  name: 'LibraryMessageState',
  initialState,
  reducers: {
    setLibraryMessage: (
      state: { libraryMessage: IPropsPredefinedResponse[] },
      action: PayloadAction<IPropsPredefinedResponse[]>,
    ) => {
      state.libraryMessage = action.payload;
    },
    setDeleteMessage: (state: any, action: PayloadAction<string>) => {
      const messageToDelete = state.libraryMessage.filter(
        (item: { _id: string }) => item._id !== action.payload,
      );
      return { ...state, libraryMessage: [...messageToDelete] };
    },
  },
});

export const { setLibraryMessage, setDeleteMessage } =
  LibraryMessageStore.actions;
export default LibraryMessageStore.reducer;
