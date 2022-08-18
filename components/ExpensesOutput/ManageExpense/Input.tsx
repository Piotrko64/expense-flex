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
    const inputStyles: Array<ViewStyle> = [styles.input];

    if (textConfig?.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...textConfig} style={inputStyles} value={value} />
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
        minHeight: 100,
        textAlignVertical: "top",
    },
});
