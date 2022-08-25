import { OneExpense } from "./../@types/OneExpense";
export function findExpenseById(list: Array<OneExpense>, id: string) {
    return list.find((elementList) => elementList.id === id);
}

export function findIndexExpense(list: Array<OneExpense>, id: string) {
    return list.findIndex((elementList) => elementList.id === id);
}
