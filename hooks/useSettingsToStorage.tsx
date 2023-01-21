import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SettingsInterface } from "../@types/_reducers/SettingsInterface";
import { setAllSettings } from "../store/settings";

export function useSettingsFromStorage() {
    const {
        amountDaysInRecentScreen,
        showTheBiggestExpense,
        showTheSmallestExpense,
        sortByAmountExpense,
    } = useSelector((state: SettingsInterface) => state.settingsReducer);

    const dispatch = useDispatch();

    async function saveSettings() {
        await AsyncStorage.getItem("settings");

        await AsyncStorage.setItem(
            "settings",
            JSON.stringify({
                amountDaysInRecentScreen,
                showTheBiggestExpense,
                showTheSmallestExpense,
                sortByAmountExpense,
            })
        );
    }

    async function setSettingsFromStorage() {
        const settingsStorage = await AsyncStorage.getItem("settings");

        if (!settingsStorage) {
            return;
        }
        const {
            amountDaysInRecentScreen,
            showTheBiggestExpense,
            showTheSmallestExpense,
            sortByAmountExpense,
        } = JSON.parse(settingsStorage);

        dispatch(
            setAllSettings({
                amountDaysInRecentScreen,
                showTheBiggestExpense,
                showTheSmallestExpense,
                sortByAmountExpense,
            })
        );
    }

    useEffect(() => {
        saveSettings();
    }, [
        amountDaysInRecentScreen,
        showTheBiggestExpense,
        showTheSmallestExpense,
        sortByAmountExpense,
    ]);
    useEffect(() => {
        setSettingsFromStorage();
    }, []);
}
