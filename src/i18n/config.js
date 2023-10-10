import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLanguageFromStorage } from "../utils/functions";
import { DEFAULT_LANGUAGE } from "../utils/constants";

const currentLanguage = getLanguageFromStorage();

i18n.use(initReactI18next).init({
  fallbackLng: currentLanguage === null ? DEFAULT_LANGUAGE : currentLanguage,
  lng: currentLanguage === null ? DEFAULT_LANGUAGE : currentLanguage,
  resources: {
    en: {
      translations: require("./locales/en/translations.json"),
    },
    ar: {
      translations: require("./locales/ar/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "ar"];

export default i18n;
