import { useState } from "react";
import * as translations from "../lib/translations/index";

function getNestedTranslations(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key];
  }, translations[language]);
}

const useTranslation = () => {
  const [language, setLanguage] = useState("en");
  const [fallbackLanguage, setFallbackLanguage] = useState("en");

  function translate(key) {
    const keys = key.split(".");

    if (getNestedTranslations(language, keys))
      return getNestedTranslations(language, keys);
    else if (getNestedTranslations(fallbackLanguage, keys))
      return getNestedTranslations(language, keys);
    else return key;
  }

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    translate,
  };
};

export default useTranslation;
