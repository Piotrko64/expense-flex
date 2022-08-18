import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { expensesReducer } from "./expenses";

export const store = configureStore({
    reducer: {
        expensesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
