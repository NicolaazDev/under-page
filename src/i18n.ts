import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import pt from "./locales/pt/common.json";
import es from "./locales/es/common.json"; // Espanhol
import zh from "./locales/zh/common.json"; // Chinês
import he from "./locales/he/common.json"; // Hebraico
import ar from "./locales/ar/common.json"; // Árabe
import de from "./locales/de/common.json"; // Alemão

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: pt,
      },
      es: {
        translation: es,
      },
      zh: {
        translation: zh,
      },
      he: {
        translation: he,
      },
      ar: {
        translation: ar,
      },
      de: {
        translation: de,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
