import { StyleSheet, View } from 'react-native';

import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export function ExpensesOutput({ expenses, periodExpenses }: any) {
    return (
        <View>
            <ExpensesSummary periodName={periodExpenses} expenses={expenses} />
            <ExpensesList expensesList={expenses} />
        </View>
    );
}
