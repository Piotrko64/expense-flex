import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { SwitchProps } from "../../@types/SwitchProps";
import { GlobalColors } from "../../constants/styles";

export function CustomSwitch({ active, describe }: SwitchProps) {
    const [activeSwitch, setActiveSwitch] = useState(active);
    function toggleActive() {
        setActiveSwitch((state: boolean) => !state);
    }
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#767577", true: GlobalColors.primary200 }}
                thumbColor={
                    activeSwitch
                        ? GlobalColors.accent700
                        : GlobalColors.primary100
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleActive}
                value={activeSwitch}
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
