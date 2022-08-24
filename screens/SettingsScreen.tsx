import { StyleSheet, View } from "react-native";
import { CustomSwitch } from "../components/UI/CustomSwitch";
import { GlobalColors } from "../constants/styles";
import { useTranslation } from "react-i18next";
import { NumberInput } from "../components/UI/NumberInput";
import { useDispatch, useSelector } from "react-redux";
import {
    setDaysInRecentScreen,
    setSortingByAmountExpenses,
    showTheBiggestExpense,
    showTheSmallestExpense,
} from "../store/settings";
import { SettingsInterface } from "../@types/_reducers/SettingsInterface";
import { SelectOneInput } from "../components/UI/SelectOneInput";
import { dataLanguage } from "../data/dataLanguages";
import { useLanguageSetting } from "../hooks/useLanguageSetting";
import { useSettingsFromStorage } from "../hooks/useSettingsToStorage";
import { useLayoutEffect } from "react";

export function SettingsScreen({ navigation }: any) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: null,
        });
    }, [navigation]);

    useSettingsFromStorage();

    const { t, i18n } = useTranslation();
    const { changeLanguage } = useLanguageSetting();
    const dispatch = useDispatch();

    const numberInputValue = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.amountDaysInRecentScreen
    );
    function handleNumberInput(num: number) {
        dispatch(setDaysInRecentScreen(Math.abs(num)));
    }

    const IsSettingBiggestAmount = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.showTheBiggestExpense
    );
    function changeSettingBiggestAmount(boolean: boolean) {
        dispatch(showTheBiggestExpense(boolean));
        console.log(IsSettingBiggestAmount);
    }

    const IsSettingSmallestAmount = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.showTheSmallestExpense
    );
    function changeSettingSmallestAmount(boolean: boolean) {
        dispatch(showTheSmallestExpense(boolean));
    }

    const IsSortByAmountExpense = useSelector(
        (state: SettingsInterface) => state.settingsReducer.sortByAmountExpense
    );
    function changeSort(boolean: boolean) {
        dispatch(setSortingByAmountExpenses(boolean));
    }

    return (
        <View style={styles.container}>
            <CustomSwitch
                active={IsSettingBiggestAmount}
                describe={t("showBiggestExpense")}
                onChange={changeSettingBiggestAmount}
            />
            <CustomSwitch
                active={IsSettingSmallestAmount}
                describe={t("showSmallestExpense")}
                onChange={changeSettingSmallestAmount}
            />
            <CustomSwitch
                active={IsSortByAmountExpense}
                describe={t("sortByAmounts")}
                onChange={changeSort}
            />
            <NumberInput
                describe={t("numberDays")}
                value={numberInputValue}
                onChange={handleNumberInput}
            />
            <SelectOneInput
                arrayData={dataLanguage}
                chooseValue={i18n.language === "pl" ? "pl" : "en"}
                onPress={changeLanguage}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.primary500,
        padding: 20,
    },
});
