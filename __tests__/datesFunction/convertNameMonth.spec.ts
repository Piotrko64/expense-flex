import { describe, expect, test } from "vitest";
import { convertNameMonth } from "../../util/datesFunction/convertNameMonth";

describe("Is translate number to month is properly", () => {
    test('Check transform 1 on polish "lutego" ', () => {
        const polishFebruary = "lutego".toUpperCase();

        const result = convertNameMonth(2, true).toUpperCase();

        expect(polishFebruary).toEqual(result);
    });
    test("Check transform 12 on december ", () => {
        const december = "december".toUpperCase();

        const result = convertNameMonth(12, false).toUpperCase();

        expect(december).toEqual(result);
    });
});
