import { useState } from "react";
import { FlatList } from "react-native";
import { OneExpense } from "../../@types/OneExpense";
import { ExpenseItem } from "./ExpenseItem";

function renderExpenseItem(itemData: { item: OneExpense }) {
    return <ExpenseItem {...itemData.item} />;
}

export function ExpensesList({
    expensesList,
}: {
    expensesList: Array<OneExpense>;
}) {
    return (
        <FlatList
            data={expensesList}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id!}
        />
    );
}
