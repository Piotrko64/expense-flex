import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateAll } from "../store/expenses";

export async function useUpdateAsyncStorage() {
    const stateExpenses = useSelector((state: any) => state.expensesReducer);
    const dispatch = useDispatch();

    async function updateStateFromStorage() {
        const asyncStorage = await AsyncStorage.getItem("@storage_expense");
        console.log(asyncStorage);
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
