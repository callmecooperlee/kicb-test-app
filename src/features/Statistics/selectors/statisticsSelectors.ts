import { RootState } from "@app/store";

const selectStatisticsReducer = (state: RootState) => state.statisticsReducer;

export const selectStatisticsData = (state: RootState) =>
    selectStatisticsReducer(state)?.data;
export const selectStatisticsIsLoading = (state: RootState) =>
    selectStatisticsReducer(state)?.isLoading;
export const selectStatisticsError = (state: RootState) =>
    selectStatisticsReducer(state)?.error;
