import React from "react";
import useTranslation from "../hooks/useTranslation";

export default function TranslateMe() {
  const { translate, language, setLanguage } = useTranslation();

  function handleClick() {
    if (language === "en") {
      setLanguage("sv");
    } else if (language === "sv") {
      setLanguage("jp");
    } else {
      setLanguage("en");
    }
  }

  return (
    <div>
      <div>
        <h1>{translate("hero.title")}</h1>
        <p>{translate("hero.subTitle")}</p>
      </div>
      <h2>{translate("greeting")}</h2>
      <button onClick={handleClick}>{translate("button")}</button>
    </div>
  );
}

// Internationalization = i18n
// Accessability = a11y
