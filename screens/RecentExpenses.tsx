import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOuput';
import { expenseExample } from '../data/dummyData/expensesExample';

export function RecentExpenses() {
    return (
        <ExpensesOutput
            periodExpenses="Last 7 Days"
            expenses={expenseExample}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
