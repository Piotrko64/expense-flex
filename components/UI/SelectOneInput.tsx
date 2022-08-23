import { Pressable, StyleSheet, Text, View } from "react-native";
import { DataToOneSelect } from "../../@types/DataToOneSelectInput";
import { GlobalColors } from "../../constants/styles";

export function SelectOneInput({ onPress, arrayData, chooseValue }: any) {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.row}>
                {arrayData.map((info: DataToOneSelect) => (
                    <View
                        key={info.value}
                        style={[
                            styles.block,
                            chooseValue === info.value && styles.chooseBlock,
                        ]}
                    >
                        <Pressable
                            key={info.value}
                            onPress={() => console.log(info.value)}
                            style={({ pressed }) => [pressed && styles.pressed]}
                            android_ripple={{
                                color: GlobalColors.forAndroidRipple,
                            }}
                        >
                            <Text
                                style={[
                                    styles.oneBlockText,
                                    chooseValue === info.value &&
                                        styles.chooseBlock,
                                ]}
                            >
                                {info.name}
                            </Text>
                        </Pressable>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flexContainer: {},
    block: {
        margin: 2,
        overflow: "hidden",
        borderRadius: 4,
        flex: 1,
    },
    chooseBlock: {
        color: "white",
        backgroundColor: GlobalColors.accent800,
    },
    oneBlockText: {
        fontSize: 18,
        backgroundColor: "white",
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 4,
        textAlign: "center",
    },
    row: {
        marginTop: 24,
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalColors.primary100,
        borderRadius: 4,
    },
});
