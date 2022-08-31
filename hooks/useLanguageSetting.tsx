import { useTranslation } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLayoutEffect } from "react";
export function useLanguageSetting() {
    const { i18n } = useTranslation();

    function changeLanguage(lang: string) {
        i18n.changeLanguage(lang);
        try {
            AsyncStorage.setItem("language", lang);
        } catch (error) {
            console.log(error);
        }
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
