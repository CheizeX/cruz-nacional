/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserByIdFirstNameSlice {
  currentByUserFirstName: string;
}

const initialState: IUserByIdFirstNameSlice = {
  currentByUserFirstName: '',
};

export const userSeletedFirstNameStore = createSlice({
  name: 'currentByUserFirstNameState',
  initialState,
  reducers: {
    setByUserFirstName: (state, action: PayloadAction<string>) => {
      state.currentByUserFirstName = action.payload;
    },
  },
});

export const { setByUserFirstName } = userSeletedFirstNameStore.actions;
export default userSeletedFirstNameStore.reducer;
