import { useTranslation } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLayoutEffect } from "react";
export function useLanguageSetting() {
    const { i18n } = useTranslation();
    AsyncStorage.removeItem("language");
    function changeLanguage(lang: "pl" | "en") {
        i18n.changeLanguage(lang);
        AsyncStorage.setItem("language", lang);
    }

    function setLocationLanguage() {
        if (Localization.locale === "pl-PL") {
            return changeLanguage("pl");
        }
        return changeLanguage("en");
    }

    async function checkLanguageFromStorage() {
        const languageStorage = await AsyncStorage.getItem("language");

        if (languageStorage) {
            changeLanguage(languageStorage === "pl" ? "pl" : "en");
        } else {
            setLocationLanguage();
        }
    }

    useLayoutEffect(() => {
        checkLanguageFromStorage();
    }, []);

    return { changeLanguage };
}
