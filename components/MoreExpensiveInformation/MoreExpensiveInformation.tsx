import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { ExpensesReducerInterface } from "../../@types/_reducers/ExpensesReducerInterface";
import { filterExpensesByMonthAndYear } from "../../util/datesFunction/filterExpenseByMonthAndYear";
import { filterExpensesByYear } from "../../util/datesFunction/filterExpensesByYear";
import { filterExpensesFromDay } from "../../util/datesFunction/filterExpensesFromDay";

export function MoreExpensiveInformation({ date }: { date: string }) {
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const day = new Date(date).getDate();

    const allExpenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );

    const expensesFromThisMonth = filterExpensesByMonthAndYear(
        allExpenses,
        year,
        month
    );
    const expensesFromThisDay = filterExpensesFromDay(
        allExpenses,
        year,
        month,
        day
    );
    const expensesFromThisYear = filterExpensesByYear(allExpenses, year);
    return (
        <View>
            <Text>Tego Dnia: {expensesFromThisDay}</Text>
            <Text>Tego miesiąca: {expensesFromThisMonth}</Text>
            <Text>Tego Roku: {expensesFromThisYear}</Text>
        </View>
    );
}
