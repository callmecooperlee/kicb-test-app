import cls from "./Title.module.scss";

export const Title = ({ children }) => {
    return <div className={cls.title}>{children}</div>;
};
