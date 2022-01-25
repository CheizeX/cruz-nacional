/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateAccountStep } from '../../../config/create-account';

interface IOnboardingSlice {
  onboardingStep: CreateAccountStep;
}

const initialState: IOnboardingSlice = {
  onboardingStep: CreateAccountStep.VALIDATING,
};

export const onboardingStore = createSlice({
  name: 'onboardingState',
  initialState,
  reducers: {
    setOnboardingStatus: (state, action: PayloadAction<CreateAccountStep>) => {
      state.onboardingStep = action.payload;
    },
  },
});

export const { setOnboardingStatus } = onboardingStore.actions;
export default onboardingStore.reducer;
