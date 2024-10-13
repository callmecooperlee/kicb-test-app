interface StatisticsState {
    data: any[];
    isLoading: boolean;
    error: string | null;
}

export const initialState: StatisticsState = {
    data: [],
    isLoading: false,
    error: null,
};
