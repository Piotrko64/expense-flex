import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function IconButton({
    icon,
    size,
    color,
    onPress,
}: {
    icon: keyof typeof Ionicons.glyphMap;
    size: number;
    color: string;
    onPress: () => void;
}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && style.pressed}
        >
            <View style={style.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    );
}

const style = StyleSheet.create({
    buttonContainer: {
        borderRadius: 4,
        padding: 2,
        margin: 6,
    },
    pressed: {
        opacity: 0.25,
    },
});
