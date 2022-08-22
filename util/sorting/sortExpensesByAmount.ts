import { OneExpense } from "../../@types/OneExpense";

export function sortExpensesByAmount(expenses: Array<OneExpense>) {
    return [...expenses].sort(function (a, b) {
        return +b.amount - +a.amount;
    });
}
