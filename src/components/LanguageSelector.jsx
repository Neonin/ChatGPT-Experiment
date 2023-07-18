import { useTranslation } from "react-i18next";
import { systemLanguage } from "../locales/i18n.constants";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select value={i18n.language} onChange={changeLanguage}>
      {Object.keys(systemLanguage).map((langKey) => (
        <option key={langKey} value={langKey}>
          {systemLanguage[langKey]}
        </option>
      ))}
    </select>
  );
};
