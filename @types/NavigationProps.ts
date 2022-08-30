import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "./RootStackParamsList";

export type NavigationProps = NativeStackScreenProps<
    RootStackParamsList,
    keyof RootStackParamsList
>;

type TabParamList = {
    RecentExpenses: undefined;
    AllExpenses: undefined;
    Graphs: undefined;
    Settings: undefined;
};

export type HookUseNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, keyof TabParamList>,
    StackNavigationProp<RootStackParamsList>
>;
