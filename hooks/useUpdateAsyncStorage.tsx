import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseExample } from "../data/dummyData/expensesExample";
import { updateExpense, updateAll } from "../store/expenses";

export async function useUpdateAsyncStorage() {
    const [isStartUpdate, setIsStartUpdate] = useState(false);

    const stateExpenses = useSelector((state: any) => state.expensesReducer);
    const dispatch = useDispatch();

    async function updateStateFromStorage() {
        const asyncStorage = await AsyncStorage.getItem("@storage_expense");

        if (asyncStorage) {
            dispatch(updateAll(JSON.parse(asyncStorage)));

            setIsStartUpdate(true);
        }
    }

    async function updateStorage() {
        if (isStartUpdate) {
            try {
                await AsyncStorage.setItem(
                    "@storage_expense",
                    JSON.stringify(stateExpenses)
                );
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        updateStateFromStorage();
    }, []);
    useEffect(() => {
        updateStorage();
    }, [stateExpenses]);
}
