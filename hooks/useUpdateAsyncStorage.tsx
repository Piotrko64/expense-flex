import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseExample } from "../data/dummyData/expensesExample";
import { updateExpense } from "../store/expenses";

export function useUpdateAsyncStorage() {
    const stateExpenses = useSelector((state: any) => state.expensesReducer);
    const dispatch = useDispatch();

    async function saveToLocalStorage() {
        try {
            await AsyncStorage.setItem(
                "@storage_expense",
                JSON.stringify(stateExpenses)
            );
        } catch (error) {
            console.log(error);
        }
    }

    async function showAsyncStorage() {
        const asyncStorage = await AsyncStorage.getItem("@storage_expense");

        return asyncStorage ? JSON.parse(asyncStorage) : expenseExample;
    }

    async function updateReducer() {
        const asyncStorage = await AsyncStorage.getItem("@storage_expense");

        dispatch(
            updateExpense(
                asyncStorage ? JSON.parse(asyncStorage) : expenseExample
            )
        );
    }

    useEffect(() => {
        saveToLocalStorage();
    }, [stateExpenses]);

    return [updateReducer, showAsyncStorage];
}
