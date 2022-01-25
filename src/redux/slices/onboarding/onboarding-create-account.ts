/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICreateAccountSlice {
  currentIdUserAccount: string;
}

const initialState: ICreateAccountSlice = {
  currentIdUserAccount: '',
};

export const createAccountStore = createSlice({
  name: 'createAccountState',
  initialState,
  reducers: {
    setByUserIdOnboarding: (state, action: PayloadAction<string>) => {
      state.currentIdUserAccount = action.payload;
    },
  },
});

export const { setByUserIdOnboarding } = createAccountStore.actions;
export default createAccountStore.reducer;
