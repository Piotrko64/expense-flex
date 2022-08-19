import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { expenseExample } from "../data/dummyData/expensesExample";

export function useUpdateAsyncStorage() {
    const stateExpenses = useSelector((state: any) => state.expensesReducer);
    async function saveToLocalStorage() {
        try {
            await AsyncStorage.setItem(
                "@storage_Key",
                JSON.stringify(stateExpenses)
            );
        } catch (e) {
            // saving error
        }
    }
    useEffect(() => {
        console.log();
        saveToLocalStorage();
    }, [stateExpenses]);

    async function showAsyncStorage() {
        const asyncStorage = await AsyncStorage.getItem("@storage_Key");
        console.log(JSON.parse(asyncStorage!));
        return asyncStorage ? JSON.parse(asyncStorage) : expenseExample;
    }

    return [showAsyncStorage];
}
