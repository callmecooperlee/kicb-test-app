import { Outlet } from "react-router-dom";

import { ProfileButton } from "@features/ProfileButton/ProfileButton.tsx";
import { SidebarLinkFactory } from "@features/SidebarLinkFactory/SidebarLinkFactory.tsx";

import logo from "@shared/assets/logo-full.svg";
import { SearchIcon } from "@shared/icons/SearchIcon.tsx";
import { sidebarLinks } from "@shared/consts/sidebarLinks.ts";

import cls from "./CRMLayout.module.scss";
import { Search } from "@shared/ui/Search/Search.tsx";
import { Sidebar } from "@features/Sidebar/Sidebar.tsx";

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
