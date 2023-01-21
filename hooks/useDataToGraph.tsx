import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

    const [labels, setLabels] = useState<string[]>([]);
    const [dataLabel, setDataLabel] = useState<Array<number>>([]);
    const { i18n } = useTranslation();

    useEffect(() => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth() + 1;

        const isPL = i18n.language === "pl";

        setLabels([]);
        setDataLabel([]);

        function arrayRange(range: number) {
            return [...Array(range).keys()].reverse();
        }

        if (mode === "years") {
            setLabels(
                arrayRange(6).map((number) => (thisYear - number).toString())
            );
            setDataLabel(
                arrayRange(6).map(
                    (number) =>
                        +filterExpensesByYear(Expenses, thisYear - number)
                )
            );
        } else if (mode === "months") {
            setLabels(
                arrayRange(6).map((numberMonth) =>
                    convertNameMonth(thisMonth - numberMonth, isPL)
                )
            );
            setDataLabel(
                arrayRange(6).map(
                    (numberMonth) =>
                        +filterExpensesByMonthAndYear(
                            Expenses,
                            thisYear,
                            thisMonth - numberMonth - 1
                        )
                )
            );
        } else if (mode === "days") {
            setLabels(arrayRange(7).map((day) => getFormattedEarlierDay(day)));
            setDataLabel(
                arrayRange(7).map(
                    (day) =>
                        +filterExpensesFromDay(Expenses, getEarlierDay(day))
                )
            );
        }
    }, [mode, Expenses, i18n.language]);
    return [labels, dataLabel];
}
