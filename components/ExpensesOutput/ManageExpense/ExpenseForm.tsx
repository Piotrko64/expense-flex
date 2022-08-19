import { Pressable, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { getFormattedDate } from "../../../util/getFormatDate";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { GlobalColors } from "../../../constants/styles";
import { findExpenseById } from "../../../util/findExpenseById";
import { useSelector } from "react-redux";
import { ExpenseData } from "../../../@types/ExpenseData";
import { CustomButton } from "../../UI/CustomButton";
import { OneExpense } from "../../../@types/OneExpense";
import { ExpensesReducerInterface } from "../../../@types/_reducers/ExpensesReducerInterface";

export function ExpenseForm({
    id,
    isEditing,
    confirmHandler,
    cancelModalHandler,
}: {
    id: string;
    isEditing: boolean;
    cancelModalHandler: () => void;
    confirmHandler: (data: OneExpense) => void;
}) {
    const [openDataPicker, setOpenDataPicker] = useState(false);
    const [inputsValue, setInputsValue] = useState({
        date: new Date(),
        amount: "",
        description: "",
    });

    const allExpenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );

    useEffect(() => {
        const expense = findExpenseById(allExpenses, id);
        if (expense) {
            setInputsValue((values) => ({
                ...values,
                date: new Date(expense.date),
                amount: expense.amount,
                description: expense.description,
            }));
        }
    }, [id]);

    function setDataInputHandler(
        inputIdentifier: ExpenseData,
        enteredValue: string | Date
    ) {
        setInputsValue((inputValues) => ({
            ...inputValues,
            [inputIdentifier]: enteredValue,
        }));
    }

    return (
        <View>
            <Pressable
                onPress={() => setOpenDataPicker(true)}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.dateButton}>
                    <Text style={styles.textButton}>
                        {getFormattedDate(inputsValue.date.toISOString())}
                    </Text>
                </View>
            </Pressable>

            {openDataPicker && (
                <DateTimePicker
                    value={inputsValue.date}
                    maximumDate={new Date()}
                    onChange={(value) => {
                        setOpenDataPicker(false);
                        setDataInputHandler(
                            "date",
                            new Date(value.nativeEvent.timestamp!)
                        );
                    }}
                />
            )}

            <Input
                label="Name"
                textConfig={{
                    multiline: true,
                    autoCorrect: false,
                    placeholder: "Name Expense",
                    onChangeText: (text) =>
                        setDataInputHandler("description", text),
                }}
                value={inputsValue.description}
            />
            <Input
                label="Amount"
                textConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: (text) => setDataInputHandler("amount", text),
                    placeholder: "Give the number",
                }}
                value={inputsValue.amount}
            />
            <View style={styles.buttonsContainer}>
                <CustomButton mode="flat" onPress={cancelModalHandler}>
                    Cancel
                </CustomButton>
                <CustomButton onPress={() => confirmHandler(inputsValue)}>
                    {isEditing ? "Update" : "Add"}
                </CustomButton>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.95,
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    dateButton: {
        backgroundColor: GlobalColors.primary700,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginBottom: 15,
        borderRadius: 4,
    },
    textButton: {
        fontSize: 20,
        textAlign: "center",

        padding: 10,
        color: GlobalColors.accent700,
    },
});
