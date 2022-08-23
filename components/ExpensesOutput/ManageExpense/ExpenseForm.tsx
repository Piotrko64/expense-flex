import { Pressable, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { getFormattedDate } from "../../../util/datesFunction/getFormatDate";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { GlobalColors } from "../../../constants/styles";
import { findExpenseById } from "../../../util/findExpenseById";
import { useSelector } from "react-redux";
import { ExpenseData } from "../../../@types/ExpenseData";
import { CustomButton } from "../../UI/CustomButton";
import { OneExpense } from "../../../@types/OneExpense";
import { ExpensesReducerInterface } from "../../../@types/_reducers/ExpensesReducerInterface";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

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
        id: "",
        date: new Date(),
        amount: "",
        description: "",
    });
    const { i18n } = useTranslation();
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
                label={t("name")}
                textConfig={{
                    multiline: true,
                    autoCorrect: false,
                    placeholder: t("plchName"),
                    onChangeText: (text) =>
                        setDataInputHandler("description", text),
                }}
                value={inputsValue.description}
            />
            <Input
                label={t("amount")}
                textConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: (text) => setDataInputHandler("amount", text),
                    placeholder: t("plchAmount"),
                }}
                value={inputsValue.amount}
            />
            <Pressable
                onPress={() => setOpenDataPicker(true)}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.dateButton}>
                    <Text style={styles.textButton}>
                        {getFormattedDate(
                            inputsValue.date.toISOString(),
                            i18n.language === "pl"
                        )}
                    </Text>
                </View>
            </Pressable>
            <View style={styles.buttonsContainer}>
                <CustomButton mode="flat" onPress={cancelModalHandler}>
                    {t("cancel")}
                </CustomButton>
                <CustomButton onPress={() => confirmHandler(inputsValue)}>
                    {isEditing ? t("update") : t("add")}
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
        marginTop: 30,
    },
    dateButton: {
        backgroundColor: GlobalColors.primary500,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 4,
    },
    textButton: {
        fontSize: 20,
        textAlign: "center",

        padding: 10,
        color: "white",
    },
});
