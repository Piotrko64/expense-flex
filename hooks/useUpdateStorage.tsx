import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExpensesReducerInterface } from "../@types/_reducers/ExpensesReducerInterface";
import { storage } from "../App";

import { updateAll } from "../store/expenses";

export async function useUpdateStorage() {
    const stateExpenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );
    const dispatch = useDispatch();

    async function updateStateFromStorage() {
        const storageExpense = storage.getString("@storage_expense");

        if (storageExpense) {
            dispatch(updateAll(JSON.parse(storageExpense)));
        }
    }

    function updateStorage() {
        storage.set("@storage_expense", JSON.stringify(stateExpenses));
    }

    useLayoutEffect(() => {
        updateStateFromStorage();
    }, []);
    useLayoutEffect(() => {
        updateStorage();
    }, [stateExpenses]);
}
