import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ExpenseItem } from "./ExpenseItem";

function renderExpenseItem(itemData: any) {
    return <ExpenseItem {...itemData.item} />;
}

export function ExpensesList({ expensesList }: any) {
    return (
        <FlatList
            data={expensesList}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
}
