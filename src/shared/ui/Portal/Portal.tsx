import { FC, ReactNode } from "react";

import { ReactPortal } from "@shared/ui/ReactPortal/ReactPortal";

import cls from "./Portal.module.scss";
import { classNames } from "@shared/lib";

interface PortalProps {
    isOpen: boolean;
    children: ReactNode;
}

export const Portal: FC<PortalProps> = ({
    isOpen,
    centered = false,
    children,
}) => {
    if (!isOpen) return null;

    return (
        <ReactPortal>
            <div
                className={classNames(cls.modalFixed, {
                    [cls.centered]: centered,
                })}
            >
                {children}
            </div>
        </ReactPortal>
    );
};
