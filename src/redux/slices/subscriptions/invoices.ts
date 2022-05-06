/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseRestApi } from '../../../api/base';
import { InvoicesDataProps } from '../../../components/shared/templates/SubscriptionPlans/SubscriptionSection/SubscriptionSection.interface';

export const getAllInvoices = createAsyncThunk(
  'subscriptionsDataInState/getAllInvoices',
  async () => {
    const response = await baseRestApi.get(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/stripe/invoices`,
    );
    if (response.success !== false) {
      return response;
    }
    return [];
  },
);

interface InvoicesDataSliceInterface {
  invoicesData: InvoicesDataProps[];
  loadingInvoicesData: boolean;
}

const initialState: InvoicesDataSliceInterface = {
  invoicesData: [],
  loadingInvoicesData: false,
};

export const invoicesDataToState = createSlice({
  name: 'invoicesDataToState',
  initialState,
  reducers: {
    setInvoicesData: (state, action: PayloadAction<InvoicesDataProps[]>) => {
      state.invoicesData = action.payload;
    },
  },

  extraReducers: {
    [getAllInvoices.pending.type]: (state) => {
      state.loadingInvoicesData = true;
    },
    [getAllInvoices.fulfilled.type]: (
      state,
      action: PayloadAction<InvoicesDataProps[]>,
    ) => {
      state.invoicesData = action.payload;
      state.loadingInvoicesData = false;
    },
    [getAllInvoices.rejected.type]: (state) => {
      state.loadingInvoicesData = false;
    },
  },
});

export const { setInvoicesData } = invoicesDataToState.actions;
export default invoicesDataToState.reducer;
