import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../components/UI/CustomButton";
import { IconButton } from "../components/UI/IconButton";
import { GlobalColors } from "../constants/styles";

export function ManageExpense({ route, navigation }: any) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        console.log(isEditing, route);
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);

    function deleteExpense() {}

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
