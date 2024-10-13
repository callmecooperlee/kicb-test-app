import { APP_PAGES } from "@shared/consts/pages.ts";

type SidebarSubLinkType = {
    id: number;
    title: string;
    link: string;
};

export type SidebarLinkType = {
    id: number;
    title: string;
    link?: string | null;
    type: LinkTypes;
    links?: SidebarSubLinkType[];
};

type LinkTypes = "link" | "accordion";
