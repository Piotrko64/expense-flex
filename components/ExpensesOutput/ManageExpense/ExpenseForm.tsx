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
import { useNavigation } from "@react-navigation/native";
import { OneExpense } from "../../../@types/OneExpense";

export function ExpenseForm({
    id,

    isEditing,
    confirmHandler,
}: {
    id: string;

    isEditing: boolean;
    confirmHandler: (data: OneExpense) => void;
}) {
    const [openDataPicker, setOpenDataPicker] = useState(false);
    const [inputsValue, setInputsValue] = useState({
        date: new Date(),
        amount: "0",
        description: "",
    });

    const navigation = useNavigation();

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
        enteredValue: string | Date
    ) {
        setInputsValue((inputValues) => ({
            ...inputValues,
            [inputIdentifier]: enteredValue,
        }));
    }

    function cancelModalHandler() {
        navigation.goBack();
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
