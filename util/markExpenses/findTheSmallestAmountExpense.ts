import { OneExpense } from "../../@types/OneExpense";
import { mapExpenses } from "./mapExpenses";

export function findTheSmallestAmountExpense(expenses: Array<OneExpense>) {
    return Math.min(...mapExpenses(expenses));
}
