import { StatisticsResponse } from "@features/Statistics/types/statisticsTypes.ts";

export class Statistics {
    static async getStatisticsApi(
        payload: string,
    ): Promise<StatisticsResponse[]> {
        // Имитация запроса на сервер
        return new Promise<StatisticsResponse[]>(function (resolve, _) {
            setTimeout(function () {
                resolve([
                    {
                        id: 1,
                        month: "January",
                        revenue: 120000,
                        unitsSold: 4500,
                        topSellingProduct: "Smartphone",
                    },
                    {
                        id: 2,
                        month: "February",
                        revenue: 135000,
                        unitsSold: 5000,
                        topSellingProduct: "Smartphone",
                    },
                    {
                        id: 3,
                        month: "March",
                        revenue: 140000,
                        unitsSold: 5200,
                        topSellingProduct: "Laptop",
                    },
                    {
                        id: 4,
                        month: "April",
                        revenue: 130000,
                        unitsSold: 4800,
                        topSellingProduct: "Laptop",
                    },
                    {
                        id: 5,
                        month: "May",
                        revenue: 150000,
                        unitsSold: 5400,
                        topSellingProduct: "Tablet",
                    },
                    {
                        id: 6,
                        month: "June",
                        revenue: 145000,
                        unitsSold: 5300,
                        topSellingProduct: "Tablet",
                    },
                    {
                        id: 7,
                        month: "July",
                        revenue: 160000,
                        unitsSold: 5800,
                        topSellingProduct: "Smartwatch",
                    },
                    {
                        id: 8,
                        month: "August",
                        revenue: 155000,
                        unitsSold: 5600,
                        topSellingProduct: "Smartwatch",
                    },
                    {
                        id: 9,
                        month: "September",
                        revenue: 170000,
                        unitsSold: 6200,
                        topSellingProduct: "Smartphone",
                    },
                    {
                        id: 10,
                        month: "October",
                        revenue: 165000,
                        unitsSold: 6000,
                        topSellingProduct: "Laptop",
                    },
                    {
                        id: 11,
                        month: "November",
                        revenue: 180000,
                        unitsSold: 6500,
                        topSellingProduct: "Smartphone",
                    },
                    {
                        id: 12,
                        month: "December",
                        revenue: 200000,
                        unitsSold: 7000,
                        topSellingProduct: "Laptop",
                    },
                ]);
            }, 300);
        }).then((response) => {
            const filteredResponse = response.filter((item) =>
                item.topSellingProduct
                    .toLowerCase()
                    .includes(payload.toLowerCase()),
            );
            return filteredResponse;
        });
    }
}
