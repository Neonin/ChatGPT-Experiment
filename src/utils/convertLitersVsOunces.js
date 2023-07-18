import { languageCodes } from "../locales/i18n.constants";

const options = { maximumFractionDigits: 2 };

export const litersToOunces = (liters, locale) => {
  const ounces = liters * 33.8140226;
  return new Intl.NumberFormat(languageCodes[locale], options).format(ounces);
};

export function ouncesToLiters(ounces, locale) {
  const liters = ounces / 33.8140226;
  return new Intl.NumberFormat(languageCodes[locale], options).format(liters);
}
