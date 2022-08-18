export function findExpenseById(list: Array<any>, id: string) {
    return list.find((elementList) => elementList.id === id);
}

export function findIndexExpense(list: Array<any>, id: string) {
    return list.findIndex((elementList) => elementList.id === id);
}
