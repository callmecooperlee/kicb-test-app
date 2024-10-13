import { all } from "redux-saga/effects";
import { watchStatisticsEffects } from "@features/Statistics/effects/statisticsEffects.ts";

export function* rootSaga() {
    yield all([watchStatisticsEffects()]);
}
