import { OneExpense } from "../../@types/OneExpense";
import { mapExpenses } from "./mapExpenses";

export function findTheBiggestAmountExpense(expenses: Array<OneExpense>) {
    return Math.max(...mapExpenses(expenses));
}
