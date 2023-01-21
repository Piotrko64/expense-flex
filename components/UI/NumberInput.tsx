import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalColors } from "../../constants/styles";

export function NumberInput({
    describe,
    value,
    onChange,
}: {
    describe: string;
    value: number;
    onChange: (num: number) => void;
}) {
    return (
        <View style={styles.container}>
            <TextInput
                keyboardType="decimal-pad"
                maxLength={4}
                style={styles.numberInput}
                value={value.toString()}
                onChangeText={(text) => onChange(parseInt(text))}
            />
            <Text style={styles.describe}>{describe}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "white",
        borderBottomWidth: 0.5,
        paddingVertical: 15,
    },
    numberInput: {
        backgroundColor: GlobalColors.primary50,
        borderRadius: 5,
        padding: 4,
        height: 40,
        minWidth: 80,
        fontSize: 24,
        textAlign: "center",
    },
    describe: {
        color: "white",
        fontSize: 16,
        maxWidth: 260,
        textAlign: "right",
    },
});
