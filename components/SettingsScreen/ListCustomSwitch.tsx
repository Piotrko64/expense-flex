import { FlatList } from "react-native";
import { CustomSwitch } from "../UI/CustomSwitch";
import { useDataToCustomSwitch } from "./useDataToCustomSwitch";

export function ListCustomSwitch() {
    const dataToCustomSwitch = useDataToCustomSwitch();
    return (
        <FlatList
            data={dataToCustomSwitch}
            renderItem={({ item }) => (
                <CustomSwitch
                    active={item.active}
                    describe={item.describe}
                    onChange={item.onChange}
                />
            )}
            keyExtractor={(element) => element.describe}
        />
    );
}
