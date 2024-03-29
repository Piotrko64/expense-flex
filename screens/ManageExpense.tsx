import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/i18n/i18n";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { OneExpense } from "../@types/OneExpense";
import { ExpensesReducerInterface } from "../@types/_reducers/ExpensesReducerInterface";
import { ExpenseForm } from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import { MoreExpensiveInformation } from "../components/MoreExpensiveInformation/MoreExpensiveInformation";
import { IconButton } from "../components/UI/IconButton";
import { GlobalColors } from "../constants/styles";
import { useAlertDelete } from "../hooks/useAlertDelete";
import { addExpense, updateExpense } from "../store/expenses";
import { findExpenseById } from "../util/findExpenseById";
import { validForm } from "../util/validForm";
import { NavigationProps } from "../@types/NavigationProps";

export function ManageExpense({ route, navigation }: NavigationProps) {
    const { t } = useTranslation();

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const allExpenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );

    const descriptionExpense = isEditing
        ? findExpenseById(allExpenses, editedExpenseId)?.description!
        : t("edit");
    const dateExpense =
        isEditing && findExpenseById(allExpenses, editedExpenseId)?.date;

    const dispatch = useDispatch();
    const [showAlert] = useAlertDelete(descriptionExpense, editedExpenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? `${descriptionExpense}` : t("addExp"),
        });
    }, [navigation, isEditing]);

    function cancelModalHandler() {
        navigation.goBack();
    }

    function confirmHandler({ date, description, amount }: OneExpense) {
        const objectData = {
            id: editedExpenseId,
            date: new Date(date).toISOString(),
            description,
            amount,
        };
        if (!validForm(description, amount)) {
            Alert.alert(t("invalidInputs"), t("plsCheck"));
            return;
        }
        if (isEditing) {
            dispatch(updateExpense(objectData));
        } else {
            dispatch(addExpense(objectData));
        }
        navigation.goBack();
    }

    return (
        <View style={styles.backgroundContainer}>
            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="always"
            >
                {isEditing && (
                    <MoreExpensiveInformation date={dateExpense as string} />
                )}
                <ExpenseForm
                    id={editedExpenseId}
                    isEditing={isEditing}
                    confirmHandler={confirmHandler}
                    cancelModalHandler={cancelModalHandler}
                />

                {isEditing && (
                    <View style={styles.deleteContainer}>
                        <IconButton
                            icon="trash"
                            color={GlobalColors.error500}
                            size={38}
                            onPress={showAlert}
                        />
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalColors.primary200,
        alignItems: "center",
    },

    container: {
        paddingHorizontal: 20,
        paddingVertical: 14,
    },
    backgroundContainer: {
        backgroundColor: GlobalColors.primary500White,
        flex: 1,
    },
});
