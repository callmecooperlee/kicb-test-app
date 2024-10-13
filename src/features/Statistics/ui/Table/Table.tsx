import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { statisticsActions } from "@features/Statistics/slice/statisticsSlice.ts";
import {
    selectStatisticsData,
    selectStatisticsError,
    selectStatisticsIsLoading,
} from "@features/Statistics/selectors/statisticsSelectors.ts";

import cls from "./Table.module.scss";

export const Table = () => {
    const dispatch = useDispatch();
    const statistics = useSelector(selectStatisticsData);

    useEffect(() => {
        dispatch(statisticsActions.statisticsRequest({ search: "" }));
    }, []);
    return (
        <table className={cls.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Месяц</th>
                    <th>Доход</th>
                    <th>Продано кол-во</th>
                    <th>Самый продаваемый продукт</th>
                </tr>
            </thead>
            <tbody>
                {statistics?.map((item, index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.month}</td>
                        <td>{item.revenue}</td>
                        <td>{item.unitsSold}</td>
                        <td>{item.topSellingProduct}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
