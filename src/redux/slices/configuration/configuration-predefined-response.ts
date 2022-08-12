/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsPredefinedResponse } from '../../../models/setting/setting';

interface IConfigurationSlice {
  allPredefinedResponse: IPropsPredefinedResponse[];
  idDelete: number;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IConfigurationSlice = {
  allPredefinedResponse: [],
  idDelete: 0,
  isLoanding: false,
  error: null,
};

export const PredefinedResponseStore = createSlice({
  name: 'predefinedResponseState',
  initialState,
  reducers: {
    setPredefinedResponse: (
      state: { allPredefinedResponse: IPropsPredefinedResponse[] },
      action: PayloadAction<IPropsPredefinedResponse[]>,
    ) => {
      state.allPredefinedResponse = action.payload;
    },
    setDeletePredefinedResponse: (
      state: any,
      action: PayloadAction<string>,
    ) => {
      const allPredefinedResponse = state.allPredefinedResponse.filter(
        (item: { _id: string }) => item._id !== action.payload,
      );
      return { ...state, allPredefinedResponse: [...allPredefinedResponse] };
    },
  },
});

export const { setPredefinedResponse, setDeletePredefinedResponse } =
  PredefinedResponseStore.actions;
export default PredefinedResponseStore.reducer;
