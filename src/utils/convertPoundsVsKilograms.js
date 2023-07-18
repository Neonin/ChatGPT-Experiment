import { languageCodes } from "../locales/i18n.constants";

const options = { maximumFractionDigits: 2 };

export const poundsToKilograms = (pounds, locale) => {
  const kilograms = pounds * 0.45359237;
  return new Intl.NumberFormat(languageCodes[locale], options).format(kilograms);
};

export function kilogramsToPounds(kilograms, locale) {
  const pounds = kilograms / 0.45359237;
  return new Intl.NumberFormat(languageCodes[locale], options).format(pounds);
}
