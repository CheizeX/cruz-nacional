/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseRestApi } from '../../../api/base';
import { SubscriptionDataProps } from '../../../components/shared/templates/SubscriptionPlans/SubscriptionSection/SubscriptionSection.interface';

export const getSubscriptionsData = createAsyncThunk(
  'subscriptionsDataInState/getSubscriptionsData',
  async () => {
    const response = await baseRestApi.get(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/general/plan`,
    );
    if (response.success !== false) {
      return response;
    }
    return [];
  },
);

interface SubscriptionDataSliceInterface {
  subscriptionsData: SubscriptionDataProps;
  loadingSubscriptionsData: boolean;
}

const initialState: SubscriptionDataSliceInterface = {
  subscriptionsData: {
    initDate: '',
    endDate: '',
    plan: '',
    planStatus: '',
    _id: '',
  },
  loadingSubscriptionsData: false,
};

export const subscriptionsDataToState = createSlice({
  name: 'subscriptionsDataToState',
  initialState,
  reducers: {
    setSubscriptionsData: (
      state,
      action: PayloadAction<SubscriptionDataProps>,
    ) => {
      state.subscriptionsData = action.payload;
    },
  },

  extraReducers: {
    [getSubscriptionsData.pending.type]: (state) => {
      state.loadingSubscriptionsData = true;
    },
    [getSubscriptionsData.fulfilled.type]: (
      state,
      action: PayloadAction<SubscriptionDataProps>,
    ) => {
      state.subscriptionsData = action.payload;
      state.loadingSubscriptionsData = false;
    },
    [getSubscriptionsData.rejected.type]: (state) => {
      state.loadingSubscriptionsData = false;
    },
  },
});

export const { setSubscriptionsData } = subscriptionsDataToState.actions;
export default subscriptionsDataToState.reducer;
