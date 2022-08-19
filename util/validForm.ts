export function validForm(textInput: string, numberInput: string) {
    if (textInput.length === 0 || +numberInput <= 0 || isNaN(+numberInput)) {
        return false;
    }
    return true;
}
