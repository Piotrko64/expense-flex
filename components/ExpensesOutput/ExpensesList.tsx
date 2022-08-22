import { useState } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { OneExpense } from "../../@types/OneExpense";
import { ExpensesReducerInterface } from "../../@types/_reducers/ExpensesReducerInterface";
import { SettingsInterface } from "../../@types/_reducers/SettingsInterface";
import { findTheBiggestAmountExpense } from "../../util/markExpenses/findTheBiggesAmountExpense";
import { findTheSmallestAmountExpense } from "../../util/markExpenses/findTheSmallestAmountExpense";
import { sortExpensesByDate } from "../../util/sorting/sortExpenseByDate";
import { sortExpensesByAmount } from "../../util/sorting/sortExpensesByAmount";
import { ExpenseItem } from "./ExpenseItem";

function RenderExpenseItem(itemData: {
    item: OneExpense;
    isBiggest: boolean;
    isSmallest: boolean;
}) {
    return (
        <ExpenseItem
            {...itemData.item}
            isBiggest={itemData.isBiggest}
            isSmallest={itemData.isSmallest}
        />
    );
}

export function ExpensesList({
    expensesList,
}: {
    expensesList: Array<OneExpense>;
}) {
    const theBiggestAmount = findTheBiggestAmountExpense(expensesList);
    const theSmallestAmount = findTheSmallestAmountExpense(expensesList);

    const IsSettingBiggestAmount = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.showTheBiggestExpense
    );
    const IsSettingSmallestAmount = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.showTheSmallestExpense
    );
    const IsSettingSortByAmount = useSelector(
        (state: SettingsInterface) => state.settingsReducer.sortByAmountExpense
    );

    const sortExpenses = IsSettingSortByAmount
        ? sortExpensesByAmount(expensesList)
        : sortExpensesByDate(expensesList);

    return (
        <FlatList
            data={sortExpenses}
            renderItem={({ item }) => (
                <RenderExpenseItem
                    item={item}
                    isBiggest={
                        IsSettingBiggestAmount &&
                        theBiggestAmount === +item.amount
                    }
                    isSmallest={
                        IsSettingSmallestAmount &&
                        theSmallestAmount === +item.amount
                    }
                />
            )}
            keyExtractor={(item) => item.id!}
        />
    );
}
