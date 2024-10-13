export interface RequestParamsBody {
    search: string;
}

export interface ErrorData {
    name: string;
    message: string;
}

export interface StatisticsResponse {
    id: number;
    month: string;
    revenue: number;
    unitsSold: number;
    topSellingProduct: string;
}
