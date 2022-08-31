import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/expenses";

export function useAlertDelete(descriptionExpense: string, expenseId?: string) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { t } = useTranslation();

    function showAlert(goBack = true) {
        Alert.alert(descriptionExpense, t("wantDelete"), [
            {
                text: t("cancel"),
                style: "destructive",
            },

            {
                text: t("yes"),
                onPress: () => {
                    goBack && navigation.goBack();
                    dispatch(removeExpense(expenseId));
                },
            },
        ]);
    }
    return [showAlert];
}
