import { Image } from "react-native";

export function IconImage({ size }: { size: number }) {
    return (
        <>
            <Image
                source={require("../../assets/basicIcons/icon.png")}
                style={{ height: size, width: size, marginLeft: 14 }}
            />
        </>
    );
}
