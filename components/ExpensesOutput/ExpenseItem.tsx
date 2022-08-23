import { Pressable, StyleSheet, Text, Vibration, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalColors } from "../../constants/styles";
import { getFormattedDate } from "../../util/datesFunction/getFormatDate";
import { useAlertDelete } from "../../hooks/useAlertDelete";

export function ExpenseItem({
    id,
    description,
    date,
    amount,
    isSmallest,
    isBiggest,
}: any) {
    const navigation = useNavigation<any>();
    const [showAlert] = useAlertDelete(description, id);

    function expensePressHandler() {
        navigation.navigate("ManageExpense", {
            expenseId: id,
        });
    }

    function deleteItemOnLongPress() {
        Vibration.vibrate(40);
        showAlert(false);
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed && styles.pressed}
            onLongPress={deleteItemOnLongPress}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>
                        {description}
                    </Text>
                    <Text style={[styles.textBase]}>
                        {getFormattedDate(date, true)}
                    </Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text
                        style={[
                            styles.amount,

                            isBiggest && styles.red,
                            isSmallest && styles.green,
                        ]}
                    >
                        {+amount}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.9,
    },
    green: {
        color: "#2E8B57",
    },
    red: {
        color: "#D21404",
    },
    expenseItem: {
        padding: 12,
        marginVertical: 4,
        backgroundColor: GlobalColors.primary700,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 4,
        elevation: 4,
        shadowColor: GlobalColors.primary700,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalColors.primary50,
    },
    description: {
        fontSize: 15,
        marginBottom: 4,
        fontWeight: "bold",
    },
    priceContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        minWidth: 80,
    },
    amount: {
        color: GlobalColors.primary700,
        fontWeight: "700",
        fontSize: 20,
    },
});
