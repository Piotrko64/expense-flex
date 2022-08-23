import { settingsReducer } from "./settings";
import { configureStore } from "@reduxjs/toolkit";

import { expensesReducer } from "./expenses";

export const store = configureStore({
    reducer: {
        expensesReducer,
        settingsReducer,
    },
});
