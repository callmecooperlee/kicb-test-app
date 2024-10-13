import cls from "./SidebarLink.module.scss";
import { Link } from "react-router-dom";

export const SidebarLink = ({ title, link }) => {
    return (
        <Link to={link}>
            <div className={cls.link}>{title}</div>
        </Link>
    );
};
