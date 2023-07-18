import { languageCodes } from "../locales/i18n.constants";

const options = { maximumFractionDigits: 2 };

export const inchesToCentimeters = (inches, locale) => {
  const centimeters = inches * 2.54;
  return new Intl.NumberFormat(languageCodes[locale], options).format(centimeters);
};

export function centimetersToInches(centimeters, locale) {
  const inches = centimeters / 2.54;
  return new Intl.NumberFormat(languageCodes[locale], options).format(inches);
}
