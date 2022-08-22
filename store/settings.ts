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
        isSortingByAmountExpenses: (state, action) => {
            state.showTheSmallestExpense = action.payload;
        },
        setDaysInRecentScreen: (state, action) => {
            state.amountDaysInRecentScreen = action.payload;
        },
        setModeInGraphScreen: (state, action) => {
            state.modeGraph = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});
export const settingsReducer = settingsSlice.reducer;

export const setLanguage = settingsSlice.actions.setLanguage;
export const showTheBiggestExpense =
    settingsSlice.actions.showTheBiggestExpense;
export const showTheSmallestExpense =
    settingsSlice.actions.showTheSmallestExpense;
export const setDaysInRecentScreen =
    settingsSlice.actions.setDaysInRecentScreen;
export const setModeInGraphScreen = settingsSlice.actions.setModeInGraphScreen;
export const isSortingByAmountExpenses =
    settingsSlice.actions.isSortingByAmountExpenses;
