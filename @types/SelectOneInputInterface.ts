import { DataToOneSelect } from "./DataToOneSelectInput";

export interface SelectOneInputInterface {
    onPress: (value: string) => void;
    chooseValue: string;
    arrayData: Array<DataToOneSelect>;
}
