import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en-locales";
import zh_TW from "./zh-TW-locales";
import ja from "./ja-locales";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      "zh-TW": { translation: zh_TW },
      ja: { translation: ja },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: ["localStorage"],
    },
    returnNull: false,
    react: {
      useSuspense: true,
    },
  });

export default i18n;
