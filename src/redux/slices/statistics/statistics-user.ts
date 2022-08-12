/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IHoursChart,
  IStatistics,
  IUserList,
} from '../../../models/statistics/statistics';

interface IUserStatisticsSlice {
  agentInteractionStatistics: IStatistics[];
  userList: IUserList[];
  dataHoursChart: IHoursChart[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IUserStatisticsSlice = {
  agentInteractionStatistics: [],
  userList: [],
  dataHoursChart: [],
  isLoanding: false,
  error: null,
};

export const userStatisticsStore = createSlice({
  name: 'userStatisticsState',
  initialState,
  reducers: {
    setAgentInteractionStatistics: (
      state: { agentInteractionStatistics: IStatistics[] },
      action: PayloadAction<IStatistics[]>,
    ) => {
      state.agentInteractionStatistics = action.payload;
    },
    setUserList: (
      state: { userList: IUserList[] },
      action: PayloadAction<IUserList[]>,
    ) => {
      state.userList = action.payload;
    },
    setHoursChart: (
      state: { dataHoursChart: IHoursChart[] },
      action: PayloadAction<IHoursChart[]>,
    ) => {
      state.dataHoursChart = action.payload;
    },
  },
});

export const { setAgentInteractionStatistics, setUserList, setHoursChart } =
  userStatisticsStore.actions;
export default userStatisticsStore.reducer;
