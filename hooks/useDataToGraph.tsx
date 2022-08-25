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
                    convertNameMonth(thisMonth - i, isPL),
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
            for (let i = 0; i <= 6; i++) {
                setLabels((oldLabels) => [
                    getFormattedEarlierDay(i, isPL),
                    ...oldLabels,
                ]);

                setDataLabel((oldDataLabels) => [
                    +filterExpensesFromDay(Expenses, getEarlierDay(i)),
                    ...oldDataLabels,
                ]);
            }
        }
    }, [mode, Expenses, i18n.language]);
    return [labels, dataLabel];
}
