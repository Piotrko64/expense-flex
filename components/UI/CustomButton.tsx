import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../constants/styles";

export function CustomButton({
    children,
    onPress,
    mode,
}: {
    children: JSX.Element;
    onPress: () => void;
    mode: string;
}) {
    return (
        <View style={styles.flexContainer}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
                android_ripple={{ color: GlobalColors.forAndroidRipple }}
            >
                <View style={[styles.button, mode === "flat" && styles.flat]}>
                    <Text
                        style={[
                            styles.buttonText,
                            mode === "flat" && styles.flatText,
                        ]}
                    >
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        overflow: "hidden",
        borderRadius: 4,
    },
    button: {
        padding: 8,

        overflow: "hidden",
        backgroundColor: GlobalColors.primary500,
    },
    flat: {
        backgroundColor: "transparent",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
    flatText: {
        color: GlobalColors.primary200,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalColors.primary100,
        borderRadius: 4,
    },
});
