import { ModesGraph } from "../ModesGraph";

export interface SettingsInterface {
    settingsReducer: {
        showTheBiggestExpense: boolean;
        showTheSmallestExpense: boolean;
        sortByAmountExpense: boolean;
        amountDaysInRecentScreen: number;
        modeGraph: ModesGraph;
        language: "pl" | "eng";
    };
}
