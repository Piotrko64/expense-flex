import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { GlobalColors } from "../../constants/styles";
import { useUpdateStorage } from "../../hooks/useUpdateStorage";
import { OneExpense } from "../../@types/OneExpense";
import { useTranslation } from "react-i18next";

export function ExpensesOutput({
    expenses,
    periodExpenses,
}: {
    expenses: Array<OneExpense>;
    periodExpenses: string;
}) {
    useUpdateStorage();
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.container}
                colors={[GlobalColors.primary500, GlobalColors.primary700White]}
            >
                <ImageBackground
                    source={require("../../assets/backgrounds/money.jpg")}
                    resizeMode="cover"
                    style={styles.containerImg}
                    imageStyle={styles.backgroundImage}
                >
                    <ExpensesSummary
                        periodName={periodExpenses}
                        expenses={expenses}
                    />
                    <ExpensesList expensesList={expenses} />
                    {!expenses.length && (
                        <Text style={styles.noNotesContainer}>
                            {t("noExpenses")}
                        </Text>
                    )}
                </ImageBackground>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noNotesContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        textAlign: "center",
        color: "white",
        fontSize: 40,
        marginBottom: 200,
        shadowColor: "black",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    containerImg: {
        flex: 1,
        padding: 14,
        paddingHorizontal: 12,
    },
    backgroundImage: {
        opacity: 0.09,
    },
});
