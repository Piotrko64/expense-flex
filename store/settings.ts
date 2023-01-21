import { createSlice } from "@reduxjs/toolkit";
import { exampleSettings } from "../data/dummyData/exampleSettings";

const settingsSlice = createSlice({
    name: "settings",
    initialState: exampleSettings,
    reducers: {
        showTheBiggestExpense: (state, action) => {
            state.showTheBiggestExpense = action.payload;
        },
        showTheSmallestExpense: (state, action) => {
            state.showTheSmallestExpense = action.payload;
        },
        setSortingByAmountExpenses: (state, action) => {
            state.sortByAmountExpense = action.payload;
        },
        setDaysInRecentScreen: (state, action) => {
            if (isNaN(action.payload)) {
                state.amountDaysInRecentScreen = 0;
                return;
            }
            state.amountDaysInRecentScreen = action.payload;
        },
        setAllSettings: (_state, action) => {
            return action.payload;
        },
    },
});
export const settingsReducer = settingsSlice.reducer;

export const showTheBiggestExpense =
    settingsSlice.actions.showTheBiggestExpense;
export const showTheSmallestExpense =
    settingsSlice.actions.showTheSmallestExpense;
export const setDaysInRecentScreen =
    settingsSlice.actions.setDaysInRecentScreen;

export const setSortingByAmountExpenses =
    settingsSlice.actions.setSortingByAmountExpenses;

export const setAllSettings = settingsSlice.actions.setAllSettings;
