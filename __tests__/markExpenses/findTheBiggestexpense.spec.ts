import { expect, test } from "vitest";
import { findTheBiggestAmountExpense } from "../../util/markExpenses/findTheBiggesAmountExpense";
import { dummyExpensesDataToTest } from "../dataToTests/dummyExpensesDataToTest";

test("Check amount of biggest expense", () => {
    const expectAmount = 5;

    const resultBiggestAmount = findTheBiggestAmountExpense(
        dummyExpensesDataToTest
    );

    expect(expectAmount).toEqual(resultBiggestAmount);
});
