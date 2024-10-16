import { Title } from "@shared/ui/Title/Title.tsx";
import { Fragment } from "react";

import cls from "./HomePage.module.scss";
const HomePage = () => {
    return (
        <Fragment>
            <Title>Главная страница</Title>
            <div className={cls.description}>Добро пожаловать на страницу!</div>
        </Fragment>
    );
};

export default HomePage;
