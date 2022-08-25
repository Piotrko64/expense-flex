import { describe, expect, test } from "vitest";
import { filterExpensesByYear } from "../../util/datesFunction/filterExpensesByYear";
import { dummyExpensesDataToTest } from "../dataToTests/dummyExpensesDataToTest";

describe("Check summary all expenses for on year", () => {
    test("example for 2024", () => {
        const resultForThisExample = 0;

        const summaryFor2024 = filterExpensesByYear(
            dummyExpensesDataToTest,
            2024
        );

        expect(summaryFor2024).toEqual(resultForThisExample);
    });
    test("example for 2021", () => {
        const resultForThisExample = 2;

        const summaryFor2021 = filterExpensesByYear(
            dummyExpensesDataToTest,
            2021
        );

        expect(summaryFor2021).toEqual(resultForThisExample);
    });
});
