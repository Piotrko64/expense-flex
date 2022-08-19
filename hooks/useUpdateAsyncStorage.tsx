import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseExample } from "../data/dummyData/expensesExample";
import { updateExpense, updateAll } from "../store/expenses";

export async function useUpdateAsyncStorage() {
    const [isStartUpdate, setIsStartUpdate] = useState(false);

    const stateExpenses = useSelector((state: any) => state.expensesReducer);
    const dispatch = useDispatch();

    // async function saveToLocalStorage() {
    //     const asyncStorage = await AsyncStorage.getItem("@storage_expense");
    //     if (asyncStorage) {
    //         try {
    //             await AsyncStorage.setItem(
    //                 "@storage_expense",
    //                 JSON.stringify(stateExpenses)
    //             );
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }

    // async function updateReducer() {
    //     const asyncStorage = await AsyncStorage.getItem("@storage_expense");

    //     dispatch(
    //         updateExpense(
    //             asyncStorage ? JSON.parse(asyncStorage) : expenseExample
    //         )
    //     );

    // }

    async function updateStateFromStorage() {
        const asyncStorage = await AsyncStorage.getItem("@storage_expense");
        console.log(asyncStorage);
        if (asyncStorage) {
            dispatch(updateAll(JSON.parse(asyncStorage)));
            console.log("init");
            setIsStartUpdate(true);
        }
    }

    async function updateStorage() {
        const asyncStorage = await AsyncStorage.getItem("@storage_expense");

        try {
            await AsyncStorage.setItem(
                "@storage_expense",
                JSON.stringify(stateExpenses)
            );
        } catch (error) {
            console.log(error);
        }

        console.log("storage", asyncStorage);
    }

    useEffect(() => {
        updateStateFromStorage();
    }, []);
    useEffect(() => {
        updateStorage();
    }, [stateExpenses]);
}
