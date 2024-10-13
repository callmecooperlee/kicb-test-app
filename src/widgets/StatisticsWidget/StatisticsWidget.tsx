import { useDispatch, useSelector } from "react-redux";
import {
    selectStatisticsData,
    selectStatisticsIsLoading,
} from "@features/Statistics/selectors/statisticsSelectors.ts";
import { useEffect } from "react";
import { statisticsActions } from "@features/Statistics/slice/statisticsSlice.ts";
import { Table } from "@features/Statistics/ui/Table/Table.tsx";
import { Loader } from "@shared/ui/Loader/Loader.tsx";

export const StatisticsWidget = () => {
    const dispatch = useDispatch();
    const statistics = useSelector(selectStatisticsData);
    const isStatisticsLoading = useSelector(selectStatisticsIsLoading);

    useEffect(() => {
        dispatch(statisticsActions.statisticsRequest({ search: "" }));
    }, []);

    return !isStatisticsLoading ? (
        <Table statistics={statistics} />
    ) : (
        <Loader />
    );
};
