import i18n from "@render/utils/config/i18n";
import { useEffect } from "react";

export const useLanguageChange = () => {
  useEffect(() => {
    window.electronAPI["on-language-change"]((lang) => {
      console.log("change-language", lang)
      i18n.changeLanguage(lang);
    });
  }, []);
};
