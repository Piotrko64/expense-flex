import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/i18n/i18n";
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { GlobalColors } from "../constants/styles";

import { BarChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";
import { chartConfig } from "../components/GraphsData/chartConfig";
import { useDataToGraph } from "../hooks/useDataToGraph";

export function GraphScreen({ navigation }: any) {
    const [labels, dataLabels] = useDataToGraph();
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
            <LinearGradient
                style={styles.container}
                colors={[GlobalColors.primary700, GlobalColors.primary500]}
            >
                <ImageBackground
                    source={require("../assets/backgrounds/graph.jpg")}
                    resizeMode="cover"
                    style={styles.containerImg}
                    imageStyle={styles.backgroundImage}
                >
                    <Text>aaaa</Text>
                    <BarChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix="$"
                        chartConfig={chartConfig}
                    />
                    <Text>{JSON.stringify(labels)}</Text>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    containerImg: {
        flex: 1,
        padding: 0,
        paddingHorizontal: 0,
    },
    backgroundImage: {
        opacity: 0.09,
    },

    container: {
        padding: 0,
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,
    },
});
