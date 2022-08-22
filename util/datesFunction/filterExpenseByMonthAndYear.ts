import { OneExpense } from "../../@types/OneExpense";

export function filterExpensesByMonthAndYear(
    listExpenses: Array<OneExpense>,
    year: number,
    month: number
) {
    const listCorrectExpenses = listExpenses.filter(
        (date) =>
            year &&
            new Date(date.date).getFullYear() === year &&
            month &&
            new Date(date.date).getMonth() === month
    );
    return listCorrectExpenses.reduce((sum: number, expense: OneExpense) => {
        return sum + +expense.amount;
    }, 0);
}
