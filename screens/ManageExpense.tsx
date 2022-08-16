import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export function ManageExpense() {
    return (
        <View style={styles.container}>
            <Text>Manage Expensive Screen</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
