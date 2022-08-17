import { StyleSheet, View } from 'react-native';
import { GlobalColors } from '../../constants/styles';

import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export function ExpensesOutput({ expenses, periodExpenses }: any) {
    return (
        <View style={styles.container}>
            <ExpensesSummary periodName={periodExpenses} expenses={expenses} />
            <ExpensesList expensesList={expenses} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        paddingHorizontal: 12,
        backgroundColor: GlobalColors.primary100,
        flex: 1,
    },
});
