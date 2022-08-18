import { createSlice } from "@reduxjs/toolkit";
import { expenseExample } from "../data/dummyData/expensesExample";
import { v4 } from "uuid";
import { findIndexExpense } from "../util/findExpenseById";

const expensesSlice = createSlice({
    name: "expenses",
    initialState: expenseExample,
    reducers: {
        addExpense: (state, action) => {
            state.unshift({ ...action.payload, id: v4() });
        },
        removeExpense: (state, action) => {
            console.log(action.payload, state);
            return state.filter((expense) => expense.id !== action.payload);
        },
        updateExpense: (state, action) => {
            const indexExpense = findIndexExpense(state, action.payload);
            state[indexExpense] = action.payload;
        },
    },
});

export const expensesReducer = expensesSlice.reducer;

export const addExpense = expensesSlice.actions.addExpense;
export const removeExpense = expensesSlice.actions.removeExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
