import { Link } from "react-router-dom";
import { SidebarLinkFactory } from "@features/SidebarLinkFactory/SidebarLinkFactory.tsx";

import { sidebarLinks } from "@shared/consts/sidebarLinks.ts";
import { APP_PAGES } from "@shared/consts/pages.ts";

import logoDesktop from "@shared/assets/logo-full.svg";

import cls from "./Sidebar.module.scss";

export const Sidebar = () => {
    return (
        <div className={cls.sidebar}>
            <Link to={APP_PAGES.HOME}>
                <img className={cls.logoDesktop} src={logoDesktop} alt="KICB" />
            </Link>
            <div className={cls.links}>
                {sidebarLinks.map((item) => (
                    <SidebarLinkFactory key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
