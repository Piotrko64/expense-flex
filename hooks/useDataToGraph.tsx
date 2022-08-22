import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ModesGraph } from "../@types/ModesGraph";
import { ExpensesReducerInterface } from "../@types/_reducers/ExpensesReducerInterface";
import { filterExpensesByYear } from "../util/datesFunction/filterExpensesByYear";

export function useDataToGraph() {
    const Expenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );

    const [mode, setMode] = useState<ModesGraph>("years");
    const [labels, setLabels] = useState<Array<string>>([]);
    const [dataLabel, setDataLabel] = useState<Array<number>>([]);

    useEffect(() => {
        const today = new Date();
        setLabels([]);
        setDataLabel([]);
        if (mode === "years") {
            const thisYear = today.getFullYear();
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
        }
        // else if (mode === "months") {
        //     const thisMonths = today.getFullYear();
        //     for (let i = 0; i <= 5; i++) {
        //         setLabels((oldLabels) => [
        //             (thisYear - i).toString(),
        //             ...oldLabels,
        //         ]);
        //     }
        // }
    }, [mode, Expenses]);
    return [labels, dataLabel];
}
