import { StyleSheet, View } from "react-native";
import { CustomSwitch } from "../components/UI/CustomSwitch";
import { GlobalColors } from "../constants/styles";
import { useTranslation } from "react-i18next";

export function SettingsScreen() {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <CustomSwitch active={true} describe={t("showBiggestExpense")} />
            <CustomSwitch active={true} describe={t("showSmallestExpense")} />
            <CustomSwitch active={false} describe={t("sortByAmounts")} />
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
