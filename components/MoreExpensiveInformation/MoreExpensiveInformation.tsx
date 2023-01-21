import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { ExpensesReducerInterface } from "../../@types/_reducers/ExpensesReducerInterface";
import { GlobalColors } from "../../constants/styles";
import { filterExpensesByMonthAndYear } from "../../util/datesFunction/filterExpenseByMonthAndYear";
import { filterExpensesByYear } from "../../util/datesFunction/filterExpensesByYear";
import { filterExpensesFromDay } from "../../util/datesFunction/filterExpensesFromDay";

export function MoreExpensiveInformation({ date }: { date: string }) {
    const { t } = useTranslation();

    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();

    const allExpenses = useSelector(
        (state: ExpensesReducerInterface) => state.expensesReducer
    );

    const expensesFromThisMonth = filterExpensesByMonthAndYear(
        allExpenses,
        year,
        month
    );
    const expensesFromThisDay = filterExpensesFromDay(
        allExpenses,
        new Date(date)
    );
    const expensesFromThisYear = filterExpensesByYear(allExpenses, year);
    return (
        <View>
            <Text style={styles.details}>{t("moreDetails")} </Text>
            <View>
                <Text style={styles.text}>
                    {t("thatDay")}:
                    <Text style={styles.dataNumbers}>
                        {" "}
                        {expensesFromThisDay}
                        {t("currency")}
                    </Text>
                </Text>
                <Text style={styles.text}>
                    {t("thatMonth")}:
                    <Text style={styles.dataNumbers}>
                        {" "}
                        {expensesFromThisMonth}
                        {t("currency")}
                    </Text>
                </Text>
                <Text style={styles.text}>
                    {t("thatYear")}:
                    <Text style={styles.dataNumbers}>
                        {" "}
                        {expensesFromThisYear}
                        {t("currency")}
                    </Text>
                </Text>
            </View>
            <Text style={[styles.details, styles.marginTop]}>{t("edit")}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        color: GlobalColors.primary500,
        borderBottomWidth: 4,
        borderBottomColor: GlobalColors.primary400,
        fontSize: 20,
        paddingBottom: 7,
        marginBottom: 7,
    },
    marginTop: {
        marginTop: 16,
    },
    text: {
        fontSize: 16,
        marginBottom: 2,
    },
    dataNumbers: {
        fontSize: 17,
        color: GlobalColors.primary500,
        fontWeight: "700",
    },
});
