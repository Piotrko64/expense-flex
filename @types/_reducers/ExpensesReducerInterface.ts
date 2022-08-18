export interface ExpensesReducerInterface {
    expensesReducer: Array<{
        id: string;
        amount: string;
        date: string | Date;
        description: string;
    }>;
}
