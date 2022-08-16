import { FlatList, StyleSheet, Text, View } from 'react-native';

export function ExpenseItem(itemData: any) {
    const { description } = itemData.item;
    return (
        <View>
            <Text>{description}</Text>
        </View>
    );
}
