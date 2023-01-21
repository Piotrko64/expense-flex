import { OneExpense } from "../../@types/OneExpense";

export function mapExpenses(expenses: Array<OneExpense>) {
    return expenses.map((expense) => +expense.amount);
}
