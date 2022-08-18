import { useSelector } from "react-redux";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOuput";

export function AllExpenses() {
    const expenses = useSelector((state: any) => state.expensesReducer);
    return <ExpensesOutput periodExpenses="Total" expenses={expenses} />;
}
