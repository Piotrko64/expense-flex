import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalColors } from "../../constants/styles";
import { getFormattedDate } from "../../util/getFormatDate";

export function ExpenseItem(itemData: any) {
    const { description, date, amount } = itemData.item;
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate("ManageExpense");
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>
                        {description}
                    </Text>
                    <Text style={[styles.textBase]}>
                        {getFormattedDate(date)}
                    </Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.9,
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
        fontWeight: "500",
        fontSize: 18,
    },
});
