import cls from "./Table.module.scss";

export const Table = ({ statistics }) => {
    return (
        <table className={cls.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Месяц</th>
                    <th>Доход</th>
                    <th>Продано кол-во</th>
                    <th>Самый продаваемый продукт</th>
                </tr>
            </thead>
            <tbody>
                {statistics?.map((item, index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.month}</td>
                        <td>{item.revenue}</td>
                        <td>{item.unitsSold}</td>
                        <td>{item.topSellingProduct}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
