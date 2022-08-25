import { beforeEach, describe, expect, test, vi } from "vitest";
import { getFormattedEarlierDay } from "../../util/datesFunction/getPreviousDay";

describe("Check previous day with mock od date", () => {
    beforeEach(() => {
        const date = new Date("01-08-2022");
        vi.setSystemTime(date);
    });
    test("Should equal previous day for '08-01-2022'", () => {
        const expectDate = "07.01";

        const resultPreviousDay = getFormattedEarlierDay(1);

        expect(expectDate).toEqual(resultPreviousDay);
    });
    test("Should equal previous day for '08-01-2022'", () => {
        const expectDate = "31.12";

        const resultPreviousDay = getFormattedEarlierDay(8);

        expect(expectDate).toEqual(resultPreviousDay);
    });
});
