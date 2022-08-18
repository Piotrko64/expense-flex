import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOuput";
import { useSelector } from "react-redux";
import { OneExpense } from "../@types/OneExpense";

export function RecentExpenses() {
    const expenses = useSelector((state: any) => state.expensesReducer);

    const recentDays = new Date();
    recentDays.setDate(recentDays.getDate() - 7);

    const recentExpenses = expenses.filter(
        (expense: OneExpense) => new Date(expense.date) >= recentDays
    );

    return (
        <ExpensesOutput
            periodExpenses="Last 7 Days"
            expenses={recentExpenses}
        />
    );
}
