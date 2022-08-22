import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from "react-native";
import { GlobalColors } from "../../../constants/styles";

export function Input({
    label,
    textConfig,
    value,
}: {
    label: string;
    textConfig: TextInputProps;
    value?: string;
}) {
    const [emptyValid, setEmptyValid] = useState(false);
    const inputStyles: Array<ViewStyle> = [styles.input];

    function isEmpty(valueInput: string) {
        if (!valueInput.length) {
            setEmptyValid(true);
            return;
        }
        setEmptyValid(false);
    }

    if (textConfig?.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                {...textConfig}
                style={[inputStyles, emptyValid && styles.invalidInput]}
                value={value}
                onBlur={() => isEmpty(value!)}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 5,
    },
    label: {
        fontSize: 16,
        color: GlobalColors.primary700,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalColors.primary50,
        padding: 6,
        borderRadius: 4,
        fontSize: 20,
        color: GlobalColors.primary700,
    },
    inputMultiline: {
        minHeight: 80,
        textAlignVertical: "top",
    },
    invalidInput: {
        backgroundColor: GlobalColors.InputError,
    },
});
