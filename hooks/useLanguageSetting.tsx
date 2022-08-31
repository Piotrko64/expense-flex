import { useTranslation } from "react-i18next";
import * as Localization from "expo-localization";
import { useLayoutEffect } from "react";
import { storage } from "../App";
export function useLanguageSetting() {
    const { i18n } = useTranslation();

    async function changeLanguage(lang: string) {
        i18n.changeLanguage(lang);

        storage.set("language", lang);
    }

    function setLocationLanguage() {
        if (Localization.locale === "pl-PL") {
            return changeLanguage("pl");
        }
        return changeLanguage("en");
    }

    async function checkLanguageFromStorage() {
        const languageStorage = storage.getString("language");

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
