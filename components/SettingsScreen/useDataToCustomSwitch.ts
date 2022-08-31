import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { SettingsInterface } from "../../@types/_reducers/SettingsInterface";
import {
    setSortingByAmountExpenses,
    showTheBiggestExpense,
    showTheSmallestExpense,
} from "../../store/settings";

export function useDataToCustomSwitch() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const IsSettingBiggestAmount = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.showTheBiggestExpense
    );
    function changeSettingBiggestAmount(boolean: boolean) {
        dispatch(showTheBiggestExpense(boolean));
    }

    const IsSettingSmallestAmount = useSelector(
        (state: SettingsInterface) =>
            state.settingsReducer.showTheSmallestExpense
    );
    function changeSettingSmallestAmount(boolean: boolean) {
        dispatch(showTheSmallestExpense(boolean));
    }

    const IsSortByAmountExpense = useSelector(
        (state: SettingsInterface) => state.settingsReducer.sortByAmountExpense
    );
    function changeSort(boolean: boolean) {
        dispatch(setSortingByAmountExpenses(boolean));
    }

    return [
        {
            active: IsSettingBiggestAmount,
            describe: t("showBiggestExpense"),
            onChange: changeSettingBiggestAmount,
        },
        {
            active: IsSettingSmallestAmount,
            describe: t("showSmallestExpense"),
            onChange: changeSettingSmallestAmount,
        },
        {
            active: IsSortByAmountExpense,
            describe: t("sortByAmounts"),
            onChange: changeSort,
        },
    ];
}
