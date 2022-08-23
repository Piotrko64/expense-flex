import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ModesGraph } from "../@types/ModesGraph";
import { ExpensesReducerInterface } from "../@types/_reducers/ExpensesReducerInterface";
import { convertNameMonth } from "../util/datesFunction/convertNameMonth";
import { filterExpensesByMonthAndYear } from "../util/datesFunction/filterExpenseByMonthAndYear";
import { filterExpensesByYear } from "../util/datesFunction/filterExpensesByYear";
import { filterExpensesFromDay } from "../util/datesFunction/filterExpensesFromDay";
import {
    getEarlierDay,
    getFormattedEarlierDay,
} from "../util/datesFunction/getPreviousDay";

export function useDataToGraph(mode: ModesGraph) {
    const Expenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );

    const [labels, setLabels] = useState<Array<string>>([]);
    const [dataLabel, setDataLabel] = useState<Array<number>>([]);

    useEffect(() => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth();

        setLabels([]);
        setDataLabel([]);
        if (mode === "years") {
            for (let i = 0; i <= 5; i++) {
                setLabels((oldLabels) => [
                    (thisYear - i).toString(),
                    ...oldLabels,
                ]);
                setDataLabel((oldDataLabels) => [
                    +filterExpensesByYear(Expenses, thisYear - i),
                    ...oldDataLabels,
                ]);
            }
        } else if (mode === "months") {
            for (let i = 0; i <= 5; i++) {
                setLabels((oldLabels) => [
                    convertNameMonth(thisMonth - i, true),
                    ...oldLabels,
                ]);

                setDataLabel((oldDataLabels) => [
                    +filterExpensesByMonthAndYear(
                        Expenses,
                        thisYear,
                        thisMonth - i
                    ),
                    ...oldDataLabels,
                ]);
            }
        } else if (mode === "days") {
            for (let i = 0; i <= 5; i++) {
                setLabels((oldLabels) => [
                    getFormattedEarlierDay(i, true),
                    ...oldLabels,
                ]);

                setDataLabel((oldDataLabels) => [
                    +filterExpensesFromDay(Expenses, getEarlierDay(i)),
                    ...oldDataLabels,
                ]);
            }
        }
    }, [mode, Expenses]);
    return [labels, dataLabel];
}
