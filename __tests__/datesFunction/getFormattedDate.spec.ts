import { describe, expect, test } from "vitest";
import { getFormattedDate } from "../../util/datesFunction/getFormatDate";

describe("Check formatted date", () => {
    test("Check for 2022-01-08 for polish location", () => {
        const expectDate = "08 stycznia 2022";

        const formattedDate = getFormattedDate("2022-01-08", true);

        expect(expectDate).toEqual(formattedDate);
    });

    test("Check for 2022-02-08 in english", () => {
        const expectDate = "08 February 2022";

        const formattedDate = getFormattedDate("2022-02-08", false);

        expect(expectDate).toEqual(formattedDate);
    });
});
