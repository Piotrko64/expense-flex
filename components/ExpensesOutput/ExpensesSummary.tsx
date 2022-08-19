import { FlatList, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../constants/styles";
import { IconImage } from "../UI/IconImage";

export function ExpensesSummary({ expenses, periodName }: any) {
    const expensesSummary = expenses.reduce((sum: number, expense: any) => {
        return sum + +expense.amount;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSummary.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        borderRadius: 4,
        flexDirection: "row",
        backgroundColor: GlobalColors.primary500,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        paddingHorizontal: 12,
    },
    period: {
        fontSize: 20,
        color: GlobalColors.primary50,
        fontWeight: "400",
    },
    sum: {
        fontSize: 20,
        fontWeight: "bold",
        color: GlobalColors.accent700,
    },
});