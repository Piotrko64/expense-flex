import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";

export function getEarlierDay(howEarly: number) {
    const today = new Date();
    const previous = new Date(today.getTime());
    previous.setDate(today.getDate() - howEarly);

    return previous;
}

export function convertToShowDayAndMonth(date: Date) {
    return format(parseISO(new Date(date).toISOString()), "dd.MM", {
        locale: pl,
    });
}

export function getFormattedEarlierDay(howEarly: number) {
    return convertToShowDayAndMonth(getEarlierDay(howEarly));
}
