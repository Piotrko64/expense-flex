import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExpensesReducerInterface } from "../@types/_reducers/ExpensesReducerInterface";

import { updateAll } from "../store/expenses";

export async function useUpdateAsyncStorage() {
    const stateExpenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );
    const dispatch = useDispatch();

    async function updateStateFromStorage() {
        const asyncStorage = await AsyncStorage.getItem("@storage_expense");

        if (asyncStorage) {
            dispatch(updateAll(JSON.parse(asyncStorage)));
        }
    }

    async function updateStorage() {
        try {
            await AsyncStorage.setItem(
                "@storage_expense",
                JSON.stringify(stateExpenses)
            );
        } catch (error) {
            console.log(error);
        }
    }

    useLayoutEffect(() => {
        updateStateFromStorage();
    }, []);
    useLayoutEffect(() => {
        updateStorage();
    }, [stateExpenses]);
}
