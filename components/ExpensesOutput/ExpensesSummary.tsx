import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GlobalColors } from '../../constants/styles';

export function ExpensesSummary({ expenses, periodName }: any) {
    const expensesSummary = expenses.reduce((sum: number, expense: any) => {
        return sum + +expense.amount;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSummary}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderRadius: 6,
        flexDirection: 'row',
        backgroundColor: GlobalColors.primary50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    period: {
        fontSize: 12,
        color: GlobalColors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalColors.primary500,
    },
});
