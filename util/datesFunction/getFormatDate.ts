import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";
import enUsLocale from "date-fns/locale/en-US";
export function getFormattedDate(date: string, isPl: boolean) {
    return format(parseISO(new Date(date).toISOString()), "dd-MMMM yyyy", {
        locale: isPl ? pl : enUsLocale,
    });
}
