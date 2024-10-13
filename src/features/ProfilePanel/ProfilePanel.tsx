import { Fragment, useRef } from "react";

import { useOnClickOutside } from "usehooks-ts";

import { classNames } from "@shared/lib";

import cls from "./ProfilePanel.module.scss";

export const ProfilePanel = ({ onQuitButtonClick, onClose }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useOnClickOutside([ref], onClose);

    return (
        <Fragment>
            <div ref={ref} className={cls.panel}>
                <div className={classNames(cls.link, {}, [cls.notAllowed])}>
                    Профиль
                </div>
                <div className={classNames(cls.link, {}, [cls.notAllowed])}>
                    Редактировать профиль
                </div>
                <div className={cls.separate} />
                <div
                    className={classNames(cls.link, {}, [cls.quit])}
                    onClick={() => {
                        onClose();
                        onQuitButtonClick();
                    }}
                >
                    Выйти из аккаунта
                </div>
            </div>
        </Fragment>
    );
};
