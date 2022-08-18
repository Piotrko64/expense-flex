import { Pressable, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { getFormattedDate } from "../../../util/getFormatDate";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { GlobalColors } from "../../../constants/styles";
import { findExpenseById } from "../../../util/findExpenseById";
import { useSelector } from "react-redux";
import { OneExpense } from "../../../@types/OneExpense";
import { ExpenseData } from "../../../@types/ExpenseData";

export function ExpenseForm({ id }: { id: string }) {
    const [openDataPicker, setOpenDataPicker] = useState(false);
    const [inputsValue, setInputsValue] = useState({
        date: new Date(),
        amount: "0",
        description: "",
    });

    const allExpenses = useSelector((state: any) => state.expensesReducer);

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
        enteredValue: string
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
                    onChange={(value) => {
                        setOpenDataPicker(false);
                        setInputsValue((values) => ({
                            ...values,
                            date: new Date(value.nativeEvent.timestamp!),
                        }));
                    }}
                />
            )}

            <Input
                label="Name"
                textConfig={{
                    multiline: true,
                    autoCorrect: false,
                }}
                value={inputsValue.description}
            />
            <Input
                label="Amount"
                textConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: (text) => setDataInputHandler("amount", text),
                }}
                value={inputsValue.amount}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.95,
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
