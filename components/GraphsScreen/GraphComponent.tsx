import { useLayoutEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useDataToGraph } from "../../hooks/useDataToGraph";
import { chartConfig } from "./chartConfig";
import { BarChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import { ModesGraph } from "../../@types/ModesGraph";
import { useTranslation } from "react-i18next";
import { GlobalColors } from "../../constants/styles";
import { ChartData } from "react-native-chart-kit/dist/HelperTypes";

export function GraphComponent({ mode }: { mode: ModesGraph }) {
    const navigation = useNavigation();
    const [labels, dataLabels] = useDataToGraph(mode);

    const { t } = useTranslation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: null,
        });
    }, [navigation]);

    const screenWidth = Dimensions.get("window").width;
    const data = {
        labels: labels,
        datasets: [
            {
                data: dataLabels,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2,
            },
        ],
    };
    return (
        <View style={styles.backgroundContainer}>
            <Text style={styles.header}>{`${t("last")} ${t(mode)}`}</Text>
            <BarChart
                data={data as ChartData}
                width={screenWidth - 10}
                height={300}
                yAxisLabel=""
                yAxisSuffix={t("currency")}
                chartConfig={chartConfig}
                style={styles.chart}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "white",
        fontSize: 22,
        paddingVertical: 10,
        backgroundColor: GlobalColors.primary200,
        width: "100%",

        textAlign: "center",
        borderRadius: 8,
    },
    chart: {
        borderRadius: 8,
        paddingTop: 20,
    },

    backgroundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 40,
        margin: 4,
    },
});
