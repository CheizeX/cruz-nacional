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
    persistentAgentsCount: 0,
    generalPlan: {
      persistentAgentsCount: 0,
      agentes: 0,
      agentes_extra: 0,
      agentes_registrados: 0,
      supervisores: 0,
      administradores: 0,
      webchat: false,
      bot: false,
      bot_personalizado: false,
      messenger: false,
      instagram: false,
      unofficialWhatsApp: false,
      officialWhatsApp: false,
      conversaciones_proactivas: false,
      soporte_via_email: false,
      soporte_personalizado: false,
      invitaciones_enviadas: 0,
      invitaciones_disponibles: 0,
      agentes_a_eliminar: 0,
      supervisores_registrados: 0,
      stripe_end_date: '',
      stripe_init_date: '',
      downgrade: false,
    },
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
