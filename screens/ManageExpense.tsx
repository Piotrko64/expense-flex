import { useLayoutEffect } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { OneExpense } from "../@types/OneExpense";
import { ExpenseForm } from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import { IconButton } from "../components/UI/IconButton";
import { GlobalColors } from "../constants/styles";
import { expenseExample } from "../data/dummyData/expensesExample";
import { useAlertDelete } from "../hooks/useAlertDelete";
import { addExpense, updateExpense } from "../store/expenses";
import { findExpenseById } from "../util/findExpenseById";
import { validForm } from "../util/validForm";

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

    function confirmHandler({ date, description, amount }: OneExpense) {
        const objectData = {
            id: editedExpenseId,
            date: new Date(date).toISOString(),
            description,
            amount,
        };
        if (!validForm(description, amount)) {
            Alert.alert("Invalid inputs", "Please check your input values");
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
            <ScrollView contentContainerStyle={styles.container}>
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

    container: {
        padding: 24,
    },
    backgroundContainer: {
        backgroundColor: GlobalColors.primary500White,
        flex: 1,
    },
});
