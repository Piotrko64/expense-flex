import { OneExpense } from "../../@types/OneExpense";

export function filterExpensesByYear(
    listExpenses: Array<OneExpense>,
    year: number
) {
    const listCorrectExpenses = listExpenses.filter(
        (date) => year && new Date(date.date).getFullYear() === year
    );

    return listCorrectExpenses.reduce((sum: number, expense: OneExpense) => {
        return sum + +expense.amount;
    }, 0);
}
