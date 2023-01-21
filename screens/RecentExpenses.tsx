import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOuput";
import { useSelector } from "react-redux";
import { OneExpense } from "../@types/OneExpense";
import { SettingsInterface } from "../@types/_reducers/SettingsInterface";
import { useTranslation } from "react-i18next";
import { ExpensesReducerInterface } from "../@types/_reducers/ExpensesReducerInterface";

export function RecentExpenses() {
    const { t } = useTranslation();

    const expenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );
    const amountDays = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.amountDaysInRecentScreen
    );

    const recentDays = new Date();
    recentDays.setDate(recentDays.getDate() - amountDays);

    const recentExpenses = expenses.filter(
        (expense: OneExpense) =>
            new Date(expense.date) >= recentDays &&
            new Date(expense.date) <= new Date()
    );

    return (
        <ExpensesOutput
            periodExpenses={`${t("last")} ${amountDays} ${t("days")}`}
            expenses={recentExpenses}
        />
    );
}
