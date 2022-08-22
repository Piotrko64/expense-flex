import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ExpensesReducerInterface } from "../@types/_reducers/ExpensesReducerInterface";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOuput";

export function AllExpenses() {
    const { t } = useTranslation();
    const expenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );
    return <ExpensesOutput periodExpenses={t("total")} expenses={expenses} />;
}
