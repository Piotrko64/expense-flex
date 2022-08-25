import { describe, expect, test } from "vitest";
import { filterExpensesByMonthAndYear } from "../../util/datesFunction/filterExpenseByMonthAndYear";
import { dummyExpensesDataToTest } from "../dataToTests/dummyExpensesDataToTest";

describe("Check summary all expenses for dummy data in month", () => {
    test("example for January 2022", () => {
        const summaryForJanuary = filterExpensesByMonthAndYear(
            dummyExpensesDataToTest,
            2022,
            0
        );

        const resultForThisExample = 2;

        expect(resultForThisExample).toEqual(summaryForJanuary);
    });
    test("example for February 2022", () => {
        const summaryForFebruary = () =>
            filterExpensesByMonthAndYear(dummyExpensesDataToTest, 2022, 1);

        const resultForThisExample = 2;

        expect(resultForThisExample).toEqual(summaryForFebruary());
    });
});
