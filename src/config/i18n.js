import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "../locales/uz/translation.json";
import ru from "../locales/ru/translation.json";
import en from "../locales/en/translation.json";
import de from "../locales/de/translation.json";

const resources = {
  uz: {
    translation: uz,
  },
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {});

i18n.on("languageChanged", (lang) => {
  localStorage.setItem("language", lang);
});

export default i18n;
