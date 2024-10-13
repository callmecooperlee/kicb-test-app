import { combineReducers } from "@reduxjs/toolkit";
import { statisticsReducer } from "@features/Statistics/slice/statisticsSlice.ts";

const rootReducer = combineReducers({
    statisticsReducer: statisticsReducer,
});

export default rootReducer;
