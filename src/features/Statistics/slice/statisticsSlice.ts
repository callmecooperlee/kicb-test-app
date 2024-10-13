import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initialState/statisticsInitialState.ts";
import {
    RequestParamsBody,
    StatisticsResponse,
} from "@features/Statistics/types/statisticsTypes.ts";

const statisticsSlice = createSlice({
    name: "statistics",
    initialState,
    reducers: {
        statisticsRequest: (state, _: PayloadAction<RequestParamsBody>) => {
            state.isLoading = true;
            state.error = null;
        },
        statisticsSuccess: (
            state,
            action: PayloadAction<StatisticsResponse[]>,
        ) => {
            state.data = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        statisticsFailure: (state, action) => {
            state.error = action.payload.message;
            state.isLoading = false;
        },
    },
});

export const { actions: statisticsActions } = statisticsSlice;

export const { reducer: statisticsReducer } = statisticsSlice;
