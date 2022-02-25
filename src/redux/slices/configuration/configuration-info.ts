/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  createAction,
} from '@reduxjs/toolkit';
import { baseRestApi } from '../../../api/base';

export const getConfigurationData = createAsyncThunk(
  'configurationDataInState/getConfigurationData',
  async () => {
    const response = await baseRestApi.get(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/business-time`,
    );
    if (response.success !== false) {
      return response;
    }
    return [];
  },
);
export const getGeneralConfigurationData = createAsyncThunk(
  'configurationDataInState/getGeneralConfigurationData',
  async () => {
    const response = await baseRestApi.get(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings`,
    );
    if (response.success !== false) {
      return response;
    }
    return [];
  },
);

export const getBusinessHoursData = createAction(
  'configurationDataInState/getBusinessHoursData',
  (configurationData: any) => {
    const restrictionsFiltered = Object.entries(configurationData || {})
      .map((restr) => restr)
      .filter((restriction: any) => restriction[1].name);
    const filtro = restrictionsFiltered.reduce((acc, [key, value]) => {
      const { id, name, isActive, secondTime, start, end, reStart, reEnd } =
        value as any;
      return {
        [key]: {
          id,
          name,
          isActive,
          secondTime,
          start,
          end,
          reStart,
          reEnd,
        },
        ...acc,
      };
    }, {}) as any;
    return {
      payload: filtro,
    };
  },
);

export const getListOfRestrictions = createAction(
  'configurationDataInState/getListOfRestrictions',
  (configurationData: any) => {
    const restrictionsFiltered = configurationData.restrictions || [];
    return {
      payload: restrictionsFiltered,
    };
  },
);

interface ConfigurationDataSliceInterface {
  configurationData: any[];
  generalConfigurationData: any;
  businessHoursData: any[];
  listOfRestrictions: any[];
  loadingConfigData: boolean;
  loadingGeneralConfigData: boolean;
}

const initialState: ConfigurationDataSliceInterface = {
  configurationData: [],
  generalConfigurationData: {},
  businessHoursData: [],
  listOfRestrictions: [],
  loadingConfigData: false,
  loadingGeneralConfigData: false,
};

export const configurationDataToState = createSlice({
  name: 'configurationDataInState',
  initialState,
  reducers: {
    setconfigurationData: (state, action: PayloadAction<any[]>) => {
      state.configurationData = action.payload;
    },
    setGeneralConfigurationData: (state, action: PayloadAction<any[]>) => {
      state.generalConfigurationData = action.payload;
    },
    setBusinessHoursData: (state, action: PayloadAction<any[]>) => {
      state.businessHoursData = action.payload;
    },
    setListOfRestrictions: (state, action: PayloadAction<any[]>) => {
      state.listOfRestrictions = action.payload;
    },
  },

  extraReducers: {
    [getConfigurationData.pending.type]: (state) => {
      state.loadingConfigData = true;
    },
    [getConfigurationData.fulfilled.type]: (
      state,
      action: PayloadAction<any[]>,
    ) => {
      state.configurationData = action.payload;
      state.loadingConfigData = false;
    },
    [getConfigurationData.rejected.type]: (state) => {
      state.loadingConfigData = false;
    },

    [getGeneralConfigurationData.pending.type]: (state) => {
      state.loadingGeneralConfigData = true;
    },
    [getGeneralConfigurationData.fulfilled.type]: (
      state,
      action: PayloadAction<any[]>,
    ) => {
      state.generalConfigurationData = action.payload;
      state.loadingGeneralConfigData = false;
    },
    [getGeneralConfigurationData.rejected.type]: (state) => {
      state.loadingGeneralConfigData = false;
    },

    [getBusinessHoursData.type]: (state, action: PayloadAction<any[]>) => {
      state.businessHoursData = action.payload;
    },

    [getListOfRestrictions.type]: (state, action: PayloadAction<any[]>) => {
      state.listOfRestrictions = action.payload;
    },
  },
});

export const {
  setconfigurationData,
  setGeneralConfigurationData,
  setBusinessHoursData,
  setListOfRestrictions,
} = configurationDataToState.actions;
export default configurationDataToState.reducer;
