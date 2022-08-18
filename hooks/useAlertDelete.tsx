import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/expenses";

export function useAlertDelete(descriptionExpense: string, expenseId: string) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    function showAlert(goBack = true) {
        Alert.alert(descriptionExpense, "Do you want delete this expense?", [
            {
                text: "Cancel",
                style: "destructive",
            },

            {
                text: "Yes",
                onPress: () => {
                    goBack && navigation.goBack();
                    dispatch(removeExpense(expenseId));
                },
            },
        ]);
    }
    return [showAlert];
}
