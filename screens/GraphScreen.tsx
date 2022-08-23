import { useLayoutEffect } from "react";
import "../assets/i18n/i18n";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";

import { GlobalColors } from "../constants/styles";

import { LinearGradient } from "expo-linear-gradient";

import { GraphComponent } from "../components/GraphsScreen/GraphComponent";

export function GraphScreen({ navigation }: any) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: null,
        });
    }, [navigation]);

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
                    <ScrollView style={styles.containerGraphs}>
                        <GraphComponent mode="days" />
                        <GraphComponent mode="months" />
                        <GraphComponent mode="years" />
                    </ScrollView>
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
    containerGraphs: {
        paddingVertical: 20,
    },
    container: {
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,
    },
});
