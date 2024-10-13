import { Fragment } from "react";

import { StatisticsWidget } from "@widgets/StatisticsWidget/StatisticsWidget.tsx";

import { Title } from "@shared/ui/Title/Title.tsx";

const AdminPage = () => {
    return (
        <Fragment>
            <Title>Статистика продаж</Title>
            <StatisticsWidget />
        </Fragment>
    );
};

export default AdminPage;
