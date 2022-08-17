import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";

export function getFormattedDate(date: Date) {
    console.log(date.toString());
    return format(parseISO(date.toISOString()), "dd MMMM yyyy", {
        locale: pl,
    });
}
