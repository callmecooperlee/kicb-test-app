import { APP_PAGES } from "@shared/consts/pages.ts";
import { SidebarLinkType } from "@shared/types/SidebarLinkTypes.ts";

export const sidebarLinks: SidebarLinkType[] = [
    {
        id: 1,
        title: "Главная",
        link: APP_PAGES.HOME,
        type: "link",
        links: [],
    },
    {
        id: 2,
        title: "Статистика",
        link: APP_PAGES.TABLES,
        type: "link",
        links: [],
    },
    {
        id: 3,
        title: "Кредиты",
        type: "accordion",
        link: null,
        links: [
            {
                id: 1,
                title: "Потребительский кредит",
                link: APP_PAGES.CREDIT_ONE,
            },
            {
                id: 2,
                title: "Ипотека",
                link: APP_PAGES.CREDIT_TWO,
            },
        ],
    },
];
