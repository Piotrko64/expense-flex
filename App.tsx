import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ManageExpense } from "./screens/ManageExpense";
import { RecentExpenses } from "./screens/RecentExpenses";
import { AllExpenses } from "./screens/AllExpenses";
import { GlobalColors } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { IconButton } from "./components/UI/IconButton";
import { IconImage } from "./components/UI/IconImage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useTranslation } from "react-i18next";
import { GraphScreen } from "./screens/GraphScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { useLanguageSetting } from "./hooks/useLanguageSetting";
import { useSettingsFromStorage } from "./hooks/useSettingsToStorage";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
    const { t } = useTranslation();
    useLanguageSetting();
    useSettingsFromStorage();
    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: GlobalColors.primary500,
                },
                headerTintColor: "white",
                tabBarLabelStyle: {
                    fontSize: 13,
                },
                tabBarStyle: {
                    backgroundColor: GlobalColors.primary500,
                    minHeight: 55,
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: GlobalColors.accent700,
                tabBarInactiveTintColor: GlobalColors.primary100,
                headerRight: ({ tintColor }) => {
                    return (
                        <IconButton
                            icon="add"
                            size={32}
                            color={tintColor || "white"}
                            onPress={() => {
                                navigation.navigate("ManageExpense");
                            }}
                        />
                    );
                },
                headerLeft: () => {
                    return <IconImage size={40} />;
                },
                headerTitleContainerStyle: { paddingVertical: 0, margin: 0 },
            })}
        >
            <BottomTabs.Screen
                name="RecentExpenses"
                component={RecentExpenses}
                options={{
                    title: t("recentExp"),
                    tabBarLabel: t("last"),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpenses}
                options={{
                    title: t("allExp"),
                    tabBarLabel: t("all"),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Graphs"
                component={GraphScreen}
                options={{
                    title: t("graphs"),
                    tabBarLabel: t("graphs"),
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="bar-graph" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: t("settings"),
                    tabBarLabel: t("settings"),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="settings-sharp"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: GlobalColors.primary500,
                            },
                            headerTintColor: "white",
                        }}
                    >
                        <Stack.Screen
                            name="ExpensesOverview"
                            component={ExpensesOverview}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="ManageExpense"
                            component={ManageExpense}
                            options={{
                                title: "Manage Expense",
                                presentation: "modal",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
}
