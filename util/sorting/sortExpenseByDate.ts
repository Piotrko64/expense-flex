import { OneExpense } from "../../@types/OneExpense";

export function sortExpensesByDate(expenses: Array<OneExpense>) {
    return [...expenses].sort(function (a, b) {
        return +new Date(b.date) - +new Date(a.date);
    });
}
