import { StyleSheet, Switch, Text, View } from "react-native";
import { SwitchProps } from "../../@types/SwitchProps";
import { GlobalColors } from "../../constants/styles";

export function CustomSwitch({ active, describe, onChange }: SwitchProps) {
    function toggleActive() {
        onChange(!active);
    }
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#767577", true: GlobalColors.primary200 }}
                thumbColor={
                    active ? GlobalColors.accent800 : GlobalColors.primary100
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleActive}
                value={active}
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
    describe: {
        color: "white",
        fontSize: 16,
        maxWidth: 260,
        textAlign: "right",
    },
});
