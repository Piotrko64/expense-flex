import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ManageExpense } from "./screens/ManageExpense";
import { GlobalColors } from "./constants/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RootStackParamsList } from "./@types/RootStackParamsList";
import { NavigationExpensesOverview } from "./NavigationExpensesOverview";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

const Stack = createNativeStackNavigator<RootStackParamsList>();

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
                            component={NavigationExpensesOverview}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="ManageExpense"
                            component={ManageExpense}
                            options={{
                                title: "ManageExpense",
                                presentation: "modal",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
}
