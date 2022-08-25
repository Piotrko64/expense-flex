import { describe, expect, test } from "vitest";
import { filterExpensesFromDay } from "../../util/datesFunction/filterExpensesFromDay";
import { dummyExpensesDataToTest } from "../dataToTests/dummyExpensesDataToTest";

describe("Summary all expenses from one day", () => {
    test("example for 2021-02-08", () => {
        const resultForThisExample = 2;

        const thisDate = new Date("2021-02-08");

        const summaryForOneDay = filterExpensesFromDay(
            dummyExpensesDataToTest,
            thisDate
        );

        expect(summaryForOneDay).toEqual(resultForThisExample);
    });
    test("example for 2022-02-08", () => {
        const resultForThisExample = 2;

        const thisDate = new Date("2022-02-08");

        const summaryFor2024 = filterExpensesFromDay(
            dummyExpensesDataToTest,
            thisDate
        );

        expect(summaryFor2024).toEqual(resultForThisExample);
    });
});
