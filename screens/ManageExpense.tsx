import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { CustomButton } from "../components/UI/CustomButton";
import { IconButton } from "../components/UI/IconButton";
import { GlobalColors } from "../constants/styles";
import { expenseExample } from "../data/dummyData/expensesExample";
import { removeExpense } from "../store/expenses";
import { findExpenseById } from "../util/findExpenseById";

export function ManageExpense({ route, navigation }: any) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing
                ? `${
                      findExpenseById(expenseExample, editedExpenseId)
                          ?.description || "Edit Expense"
                  }`
                : "Add Expense",
        });
    }, [navigation, isEditing]);

    function deleteExpense() {
        console.log(editedExpenseId);

        navigation.goBack();
        dispatch(removeExpense(editedExpenseId));
    }

    function cancelModalHandler() {
        navigation.goBack();
    }

    function confirmHandler() {}
    return (
        <View style={styles.container}>
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
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalColors.primary100,
    },
});
