/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { baseRestApi } from '../../../api/base';
import { Chat, Review } from '../../../models/chat/chat';

export const getChatsByPeriod = createAsyncThunk(
  'dashboardFilterInState/getChatsByPeriod',
  async (date1: string) => {
    const response = await baseRestApi.get<Chat[]>(
      `/chats/date/${date1}?channels=all&states=all&agents=all`,
    );
    if (response.success !== false) {
      return response;
    }
    return [];
  },
);

export const getTodayChats = createAsyncThunk(
  'dashboardFilterInState/getTodayChats',
  async () => {
    const response = await baseRestApi.get<Chat[]>(
      `/chats/date/0/today?channels=all&states=all&agents=all`,
    );
    if (response.success !== false) {
      return response;
    }

    return [];
  },
);
interface DashboardFilterSliceInterface {
  chatsByPeriod: Chat[];
  todayChats: Chat[];
  todayFinishedChats: Chat[];
  todayPendingChats: Chat[];
  todayOnConversationChats: Chat[];
  reviewChats: Review[];
  loading: boolean;
  dashboardFilterDate: string;
  dateName: string;
}

const initialState: DashboardFilterSliceInterface = {
  chatsByPeriod: [],
  todayChats: [],
  todayFinishedChats: [],
  todayPendingChats: [],
  todayOnConversationChats: [],
  reviewChats: [],
  loading: false,
  dashboardFilterDate: new Date().toISOString(),
  dateName: 'Hoy',
};

export const dashboardFilterInState = createSlice({
  name: 'dashboardFilterInState',
  initialState,
  reducers: {
    setDashboardFilterInState: (state, action: PayloadAction<string>) => {
      state.dashboardFilterDate = action.payload;
    },
    setTodayAllChats: (state, action: PayloadAction<Chat[]>) => {
      state.todayChats = action.payload;
    },
    setChatsByPeriod: (state, action) => {
      state.chatsByPeriod = action.payload;
    },
    setFinishedTodayChats: (state, action: PayloadAction<Chat[]>) => {
      state.todayFinishedChats = action.payload;
    },
    setFinishedChatsByPeriod: (state, action: PayloadAction<Chat[]>) => {
      state.chatsByPeriod = action.payload;
    },
    setPendingTodayChats: (state, action: PayloadAction<Chat[]>) => {
      state.todayPendingChats = action.payload;
    },
    setOnConversationTodayChats: (state, action: PayloadAction<Chat[]>) => {
      state.todayOnConversationChats = action.payload;
    },
    setNameOfSelectedDateToFilter: (state, action: PayloadAction<string>) => {
      state.dateName = action.payload;
    },
  },
  extraReducers: {
    [getChatsByPeriod.pending.type]: (state) => {
      state.loading = true;
    },
    [getChatsByPeriod.fulfilled.type]: (
      state,
      action: PayloadAction<Chat[]>,
    ) => {
      state.chatsByPeriod = action.payload;
      state.loading = false;
    },
    [getChatsByPeriod.rejected.type]: (state) => {
      state.loading = false;
    },

    [getTodayChats.pending.type]: (state) => {
      state.loading = true;
    },
    [getTodayChats.fulfilled.type]: (state, action: PayloadAction<Chat[]>) => {
      state.todayChats = action.payload;
      state.loading = false;
    },
    [getTodayChats.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export const {
  setDashboardFilterInState,
  setFinishedTodayChats,
  setPendingTodayChats,
  setOnConversationTodayChats,
  setTodayAllChats,
  setFinishedChatsByPeriod,
  setChatsByPeriod,
  setNameOfSelectedDateToFilter,
} = dashboardFilterInState.actions;

export default dashboardFilterInState.reducer;
