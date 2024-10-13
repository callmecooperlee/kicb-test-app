import { call, put, takeLatest } from "redux-saga/effects";
import { statisticsActions } from "@features/Statistics/slice/statisticsSlice.ts";
import { Statistics } from "@features/Statistics/api/Statistics.ts";
import { PayloadAction } from "@reduxjs/toolkit";
import { RequestParamsBody } from "@features/Statistics/types/statisticsTypes.ts";

function* statisticsEffect({ payload }: PayloadAction<RequestParamsBody>) {
    try {
        const response = yield call(
            Statistics.getStatisticsApi,
            payload.search,
        );
        yield put(statisticsActions.statisticsSuccess(response));
    } catch (error) {
        yield put(statisticsActions.statisticsFailure(error));
    }
}

export function* watchStatisticsEffects() {
    yield takeLatest(statisticsActions.statisticsRequest, statisticsEffect);
}
