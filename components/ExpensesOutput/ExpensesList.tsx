import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ExpenseItem } from './ExpenseItem';

export function ExpensesList({ expensesList }: any) {
    return (
        <FlatList
            data={expensesList}
            renderItem={ExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
}
