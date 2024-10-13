import { Fragment } from "react";
import { Table } from "@features/Statistics/ui/Table/Table.tsx";
import { Title } from "@shared/ui/Title/Title.tsx";

export const AdminPage = () => {
    return (
        <Fragment>
            <Title>Статистика продаж</Title>
            <Table />
        </Fragment>
    );
};
