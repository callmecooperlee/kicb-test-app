import { Accordion } from "@shared/ui/Accordion/Accordion.tsx";
import { SidebarLink } from "@shared/ui/SidebarLink/SidebarLink.tsx";
import { SidebarLinkType } from "@shared/types/SidebarLinkTypes.ts";

export const SidebarLinkFactory = (props: { item: SidebarLinkType }) => {
    const { item } = props;
    switch (item.type) {
        case "link":
            return <SidebarLink title={item.title} link={item?.link} />;
        case "accordion":
            return <Accordion title={item.title} links={item.links} />;
        default:
            return null;
    }
};
