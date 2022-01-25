/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Review } from '../../../models/chat/chat';

interface IReviewSlice {
  reviewChats: Review[];
  isLoanding: boolean;
  reviewByAgent: string;
  datePicker: string;
  error: string | null;
}

const initialState: IReviewSlice = {
  reviewChats: [],
  isLoanding: false,
  reviewByAgent: '',
  datePicker: '',
  error: null,
};

export const chatContainerReviewStore = createSlice({
  name: 'chatContainerReviewState',
  initialState,
  reducers: {
    setReviewChatsFinished: (state, action: PayloadAction<Review[]>) => {
      state.reviewChats = action.payload;
    },
    setReviewByAgent: (state, action: PayloadAction<string>) => {
      state.reviewByAgent = action.payload;
    },
    setReviewDatePicker: (state, action: PayloadAction<string>) => {
      state.datePicker = action.payload;
    },
  },
});

export const { setReviewChatsFinished, setReviewByAgent, setReviewDatePicker } =
  chatContainerReviewStore.actions;
export default chatContainerReviewStore.reducer;
