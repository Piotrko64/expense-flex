export interface ExpenseItemInterface {
    id: string;
    description: string;
    date: string | Date;
    amount: string;
    isSmallest: boolean;
    isBiggest: boolean;
}
