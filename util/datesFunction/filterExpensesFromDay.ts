import { OneExpense } from "../../@types/OneExpense";

export function filterExpensesFromDay(
    listExpenses: Array<OneExpense>,
    year: number,
    month: number,
    day: number
) {
    const listCorrectExpenses = listExpenses.filter(
        (date) =>
            year &&
            new Date(date.date).getFullYear() === year &&
            month &&
            new Date(date.date).getMonth() === month &&
            day &&
            new Date(date.date).getDate() === day
    );

    return listCorrectExpenses.reduce((sum: number, expense: OneExpense) => {
        return sum + +expense.amount;
    }, 0);
}
