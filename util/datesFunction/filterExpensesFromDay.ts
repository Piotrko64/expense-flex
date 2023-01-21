import { OneExpense } from "../../@types/OneExpense";

export function filterExpensesFromDay(
    listExpenses: Array<OneExpense>,
    date: Date
) {
    const listCorrectExpenses = listExpenses.filter(
        (itemDate) =>
            new Date(date).toLocaleDateString() ===
            new Date(itemDate.date).toLocaleDateString()
    );

    return listCorrectExpenses.reduce((sum: number, expense: OneExpense) => {
        return sum + +expense.amount;
    }, 0);
}
