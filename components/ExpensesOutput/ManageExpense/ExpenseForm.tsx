import { Pressable, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { getFormattedDate } from "../../../util/getFormatDate";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { GlobalColors } from "../../../constants/styles";

export function ExpenseForm() {
    const [openDataPicker, setOpenDataPicker] = useState(false);
    const [date, setDate] = useState(new Date());

    function setExpenseDate() {}

    function amountChangedHandler() {}

    return (
        <View>
            <Pressable
                onPress={() => setOpenDataPicker(true)}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.dateButton}>
                    <Text style={styles.textButton}>
                        {getFormattedDate(date.toISOString())}
                    </Text>
                </View>
            </Pressable>

            {openDataPicker && (
                <DateTimePicker
                    value={date}
                    onChange={(value) => {
                        setOpenDataPicker(false);
                        setDate(new Date(value.nativeEvent.timestamp!));
                    }}
                />
            )}

            <Input
                label="Name"
                textConfig={{ multiline: true, autoCorrect: false }}
            />
            <Input
                label="Amount"
                textConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangedHandler,
                }}
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
