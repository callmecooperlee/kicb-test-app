import { useEffect, useRef, useState } from "react";

import cls from "./Accordion.module.scss";
import { ArrowIcon } from "@shared/icons/ArrowIcon.tsx";
import { classNames } from "@shared/lib";
import { Link } from "react-router-dom";

export const Accordion = ({ title, links }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (!isOpen) setHeight(0);

        if (isOpen && "clientHeight" in ref.current) {
            setHeight(ref.current.clientHeight);
        }
    }, [ref.current, isOpen]);

    return (
        <div className={cls.container}>
            <div
                className={cls.header}
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                <p>{title}</p>
                <ArrowIcon
                    className={classNames(cls.arrow, {
                        [cls.arrowIsDown]: isOpen,
                    })}
                />
            </div>
            <div className={cls.wrap} style={{ height: height }}>
                {isOpen && (
                    <div ref={ref}>
                        {links.map((item) => (
                            <Link key={item.id} to={item.link}>
                                <div className={cls.link}>{item.title}</div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
