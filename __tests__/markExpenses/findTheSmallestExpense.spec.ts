import { expect, test } from "vitest";
import { findTheSmallestAmountExpense } from "../../util/markExpenses/findTheSmallestAmountExpense";
import { dummyExpensesDataToTest } from "../dataToTests/dummyExpensesDataToTest";

test("Check amount of smallest expense", () => {
    const expectAmount = 1;

    const resultSmallestAmount = findTheSmallestAmountExpense(
        dummyExpensesDataToTest
    );

    expect(expectAmount).toEqual(resultSmallestAmount);
});
