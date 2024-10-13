import { useRef } from "react";

import { useOnClickOutside } from "usehooks-ts";

import { CrossIcon } from "@shared/icons/CrossIcon.tsx";
import { classNames } from "@shared/lib";

import cls from "./QuitPanel.module.scss";

export const QuitPanel = ({ onClose }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useOnClickOutside([ref], onClose);

    return (
        <div ref={ref} className={cls.quitPanel}>
            <div
                className={cls.cross}
                onClick={() => {
                    onClose();
                }}
            >
                <CrossIcon />
            </div>
            <div className={cls.title}>Выход из аккаунта</div>
            <div className={cls.description}>
                Вы уверены что хотите выйти из аккаунта?
            </div>

            <div className={cls.quitButtonGroup}>
                <button
                    className={cls.quitButton}
                    onClick={() => {
                        onClose();
                    }}
                >
                    Остаться
                </button>
                <button
                    className={classNames(cls.quitButton, {}, [
                        cls.cancelButton,
                        cls.notAllowed,
                    ])}
                >
                    Подтвердить
                </button>
            </div>
        </div>
    );
};
