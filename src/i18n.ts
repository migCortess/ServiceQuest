import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LENGUAJE } from "./Constants";
import es from "./Translations/es/es.json";
import en from "./Translations/en/en.json";

let StorageLanguage = localStorage.getItem("DEFAULT_LENGUAJE");

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: StorageLanguage
    ? StorageLanguage === "en"
      ? "en"
      : DEFAULT_LENGUAJE
    : DEFAULT_LENGUAJE,
  resources: {
    es: {
      global: es,
    },
    en: {
      global: en,
    },
  },
});
/*----Configuración de Multi lenguaje----*/

export default i18n;
