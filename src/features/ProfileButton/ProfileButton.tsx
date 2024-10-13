import { useState } from "react";

import { ProfilePanel } from "@features/ProfilePanel/ProfilePanel.tsx";
import { QuitPanel } from "@features/QuitPanel/QuitPanel.tsx";

import { Portal } from "@shared/ui/Portal/Portal";
import avatar from "@shared/assets/avatar.webp";

import cls from "./ProfileButton.module.scss";

export const ProfileButton = () => {
    const [isDownDropOpen, setIsDownDropOpen] = useState(false);
    const [showSubmitQuitPanel, setShowSubmitQuitPanel] = useState(false);

    return (
        <div>
            <img
                className={cls.avatar}
                src={avatar}
                alt="Logo"
                onClick={() => {
                    setIsDownDropOpen((prevState) => !prevState);
                }}
            />

            <Portal isOpen={isDownDropOpen}>
                <ProfilePanel
                    onQuitButtonClick={() => {
                        setShowSubmitQuitPanel((prevState) => !prevState);
                    }}
                    onClose={() => {
                        setIsDownDropOpen((prevState) => !prevState);
                    }}
                />
            </Portal>
            <Portal isOpen={showSubmitQuitPanel} centered>
                <QuitPanel
                    onClose={() => {
                        setShowSubmitQuitPanel((prevState) => !prevState);
                    }}
                />
            </Portal>
        </div>
    );
};
