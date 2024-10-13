import { Outlet } from "react-router-dom";

import { ProfileButton } from "@features/ProfileButton/ProfileButton.tsx";
import { Sidebar } from "@features/Sidebar/Sidebar.tsx";

import { Search } from "@shared/ui/Search/Search.tsx";

import cls from "./CRMLayout.module.scss";

export const CRMLayout = () => {
    return (
        <div className={cls.container}>
            <Sidebar />
            <div className={cls.wrap}>
                <div className={cls.header}>
                    <Search />
                    <ProfileButton />
                </div>
                <div className={cls.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
