import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";
import enUsLocale from "date-fns/locale/en-US";
export function convertNameMonth(month: number, isPl: boolean) {
    return format(
        parseISO(new Date(`${month + 1}/5/2000`).toISOString()),
        "MMMM",
        {
            locale: isPl ? pl : enUsLocale,
        }
    );
}
