import {
  defaultFormat,
  formatScientific,
  formatWithoutGrouping,
  formatWithTwoFractionDigits,
  generateRandomNumbers,
} from "../utils";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const CardFormatNumbers = () => {
  const { i18n, t } = useTranslation();

  const arrayWithRandomNumbers = useMemo(() => generateRandomNumbers(), []);

  return (
    <div className="card">
      <h3>{t("title.formatNumbers")}</h3>
      <ul>
        <li>{defaultFormat(arrayWithRandomNumbers[0], i18n.language)}</li>
        <li>{formatWithTwoFractionDigits(arrayWithRandomNumbers[1], i18n.language)}</li>
        <li>{formatWithoutGrouping(arrayWithRandomNumbers[2], i18n.language)}</li>
        <li>{formatScientific(arrayWithRandomNumbers[3], i18n.language)}</li>
      </ul>
    </div>
  );
};
