import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { expensesReducer } from "./expenses";

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});

export const store = configureStore({
    reducer: {
        expensesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
