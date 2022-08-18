import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";

export function getFormattedDate(date: string) {
    return format(parseISO(new Date(date).toISOString()), "dd MMMM yyyy", {
        locale: pl,
    });
}
