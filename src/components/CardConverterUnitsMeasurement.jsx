import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  centimetersToInches,
  inchesToCentimeters,
  kilogramsToPounds,
  litersToOunces,
  ouncesToLiters,
  poundsToKilograms,
} from "../utils";

export const CardConverterUnitsMeasurement = () => {
  const { t, i18n } = useTranslation();

  const [value, setValue] = useState("1");

  return (
    <div className="card">
      <h3>{t("title.converterUOM")}</h3>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={1}
        max={Number.MAX_VALUE}
      />

      <div className="card-body">
        <p>
          {t("conversion.inchToCm", {
            value: value,
            result: inchesToCentimeters(value, i18n.language),
          })}
        </p>
        <p>
          {t("conversion.poundToKg", {
            value: value,
            result: poundsToKilograms(value, i18n.language),
          })}
        </p>
        <p>
          {t("conversion.literToOz", {
            value: value,
            result: litersToOunces(value, i18n.language),
          })}
        </p>
        <hr />
        <p>
          {t("conversion.cmToInch", {
            value: value,
            result: centimetersToInches(value, i18n.language),
          })}
        </p>
        <p>
          {t("conversion.kgToPound", {
            value: value,
            result: kilogramsToPounds(value, i18n.language),
          })}
        </p>
        <p>
          {t("conversion.ozToLiter", {
            value: value,
            result: ouncesToLiters(value, i18n.language),
          })}
        </p>
      </div>
    </div>
  );
};
