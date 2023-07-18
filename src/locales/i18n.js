import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./translations/en.json";
import frTranslation from "./translations/fr.json";
import uaTranslation from "./translations/ua.json";

let resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  ua: {
    translation: uaTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  debug: process.env.NODE_ENV !== "production",
  defaultNS: "translation",
  lng: "en",
  fallbackLng: "ua",
  interpolation: {
    escapeValue: false,
  },
  parseMissingKeyHandler: (key) => `No translation found for key "${key}"`,
});

export default i18n;
