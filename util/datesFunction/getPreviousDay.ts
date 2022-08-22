import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";
import enUsLocale from "date-fns/locale/en-US";

export function getEarlierDay(howEarly: number) {
    const today = new Date();
    const previous = new Date(today.getTime());
    previous.setDate(today.getDate() - howEarly);

    return previous;
}

export function convertToShowDayAndMonth(date: Date, isPl: boolean) {
    return format(parseISO(new Date(date).toISOString()), "dd.MM", {
        locale: isPl ? pl : enUsLocale,
    });
}

export function getFormattedEarlierDay(howEarly: number, isPL: boolean) {
    return convertToShowDayAndMonth(getEarlierDay(howEarly), isPL);
}
