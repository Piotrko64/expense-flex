import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ManageExpense } from "./screens/ManageExpense";
import { RecentExpenses } from "./screens/RecentExpenses";
import { AllExpenses } from "./screens/AllExpenses";
import { GlobalColors } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "./components/UI/IconButton";
import { IconImage } from "./components/UI/IconImage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: GlobalColors.primary500,
                },
                headerTintColor: "white",
                tabBarLabelStyle: {
                    fontSize: 14,
                    padding: 1,
                },
                tabBarStyle: {
                    backgroundColor: GlobalColors.primary500,
                    minHeight: 55,
                },
                tabBarActiveTintColor: GlobalColors.accent700,
                tabBarInactiveTintColor: GlobalColors.primary100,
                headerRight: ({ tintColor }) => {
                    return (
                        <IconButton
                            icon="add"
                            size={28}
                            color={tintColor}
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
                    title: "Recent Expenses",
                    tabBarLabel: "Recent",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpenses}
                options={{
                    title: "All Expenses",
                    tabBarLabel: "All",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
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
                                backgroundColor: GlobalColors.primary200,
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
