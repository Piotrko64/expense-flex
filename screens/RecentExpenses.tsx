import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export function RecentExpenses() {
    return (
        <View style={styles.container}>
            <Text>Recent</Text>
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
