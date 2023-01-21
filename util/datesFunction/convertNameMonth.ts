import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";
import enUsLocale from "date-fns/locale/en-US";
export function convertNameMonth(month: number, isPl: boolean) {
    const numberMonth = month < 1 ? 12 + month : month;

    return format(
        parseISO(new Date(`${numberMonth.toString()}/5/2000`).toISOString()),
        "MMMM",
        {
            locale: isPl ? pl : enUsLocale,
        }
    );
}
