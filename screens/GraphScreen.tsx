import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/i18n/i18n";
import {
    Alert,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { GlobalColors } from "../constants/styles";

import { BarChart, LineChart } from "react-native-chart-kit";

export function GraphScreen() {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    };
    const screenWidth = Dimensions.get("window").width;
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
            },
        ],
        legend: ["Rainy Days"], // optional
    };
    return (
        <View style={styles.backgroundContainer}>
            <Text>aaaa</Text>
            <BarChart
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel=""
                yAxisSuffix="$"
                chartConfig={chartConfig}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalColors.primary200,
        alignItems: "center",
    },

    container: {
        padding: 24,
    },
    backgroundContainer: {
        backgroundColor: "red",
        flex: 1,
    },
});
