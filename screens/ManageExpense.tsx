import { useLayoutEffect } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { ExpenseForm } from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import { CustomButton } from "../components/UI/CustomButton";
import { IconButton } from "../components/UI/IconButton";
import { GlobalColors } from "../constants/styles";
import { expenseExample } from "../data/dummyData/expensesExample";
import { useAlertDelete } from "../hooks/useAlertDelete";
import { addExpense, removeExpense, updateExpense } from "../store/expenses";
import { findExpenseById } from "../util/findExpenseById";

export function ManageExpense({ route, navigation }: any) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const descriptionExpense =
        findExpenseById(expenseExample, editedExpenseId)?.description ||
        "Edit Expense";

    const dispatch = useDispatch();
    const [showAlert] = useAlertDelete(descriptionExpense, editedExpenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? `${descriptionExpense}` : "Add Expense",
        });
    }, [navigation, isEditing]);

    function deleteExpense() {
        showAlert();
    }

    function cancelModalHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            dispatch(updateExpense(editedExpenseId));
        } else {
            dispatch(
                addExpense({
                    id: "asad",
                    date: new Date().toISOString(),
                    description: "aa",
                    amount: "44.46",
                })
            );
        }
    }
    return (
        <View style={styles.backgroundContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <ExpenseForm id={editedExpenseId} />
                <View style={styles.buttonsContainer}>
                    <CustomButton mode="flat" onPress={cancelModalHandler}>
                        Cancel
                    </CustomButton>
                    <CustomButton onPress={confirmHandler}>
                        {isEditing ? "Update" : "Add"}
                    </CustomButton>
                </View>
                {isEditing && (
                    <View style={styles.deleteContainer}>
                        <IconButton
                            icon="trash"
                            color={GlobalColors.error500}
                            size={38}
                            onPress={deleteExpense}
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
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    container: {
        padding: 24,
    },
    backgroundContainer: {
        backgroundColor: GlobalColors.primary500White,
        flex: 1,
    },
});
