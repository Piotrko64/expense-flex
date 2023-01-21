import { StyleSheet, View } from "react-native";
import { GlobalColors } from "../constants/styles";
import { useTranslation } from "react-i18next";
import { NumberInput } from "../components/UI/NumberInput";
import { useDispatch, useSelector } from "react-redux";
import { setDaysInRecentScreen } from "../store/settings";
import { SettingsInterface } from "../@types/_reducers/SettingsInterface";
import { SelectOneInput } from "../components/UI/SelectOneInput";
import { dataLanguage } from "../data/dataLanguages";
import { useLanguageSetting } from "../hooks/useLanguageSetting";
import { useSettingsFromStorage } from "../hooks/useSettingsToStorage";
import { useLayoutEffect } from "react";
import { NavigationProps } from "../@types/NavigationProps";
import { ListCustomSwitch } from "../components/SettingsScreen/ListCustomSwitch";

export function SettingsScreen({ navigation }: NavigationProps) {
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: undefined,
        });
    }, [navigation]);

    useSettingsFromStorage();

    const { t, i18n } = useTranslation();
    const { changeLanguage } = useLanguageSetting();

    const numberInputValue = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.amountDaysInRecentScreen
    );
    function handleNumberInput(num: number) {
        dispatch(setDaysInRecentScreen(Math.abs(num)));
    }

    return (
        <View style={styles.container}>
            <View>
                <ListCustomSwitch />
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
