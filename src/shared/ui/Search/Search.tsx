import cls from "./Search.module.scss";
import { SearchIcon } from "@shared/icons/SearchIcon.tsx";
import { useEffect, useState } from "react";
import { statisticsActions } from "@features/Statistics/slice/statisticsSlice.ts";
import { useDispatch } from "react-redux";

export const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        dispatch(statisticsActions.statisticsRequest({ search: value }));
    }, [value]);

    return (
        <div className={cls.container}>
            <input
                value={value}
                type="text"
                placeholder="Поиск..."
                onChange={(event) => setValue(event.target.value)}
            />
            <div
                className={cls.searchButton}
                onClick={() => {
                    dispatch(
                        statisticsActions.statisticsRequest({ search: value }),
                    );
                }}
            >
                <SearchIcon />
            </div>
        </div>
    );
};
