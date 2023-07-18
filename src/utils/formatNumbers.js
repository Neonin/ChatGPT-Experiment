import { languageCodes } from "../locales/i18n.constants";

/**
 * @param number
 * @param locale {'en' | 'ua' | 'fr'}
 * @returns {string}
 */
export const defaultFormat = (number, locale) =>
  new Intl.NumberFormat(languageCodes[locale]).format(number);

/**
 * @param number
 * @param locale {'en' | 'ua' | 'fr'}
 * @returns {string}
 */
export const formatWithTwoFractionDigits = (number, locale) =>
  new Intl.NumberFormat(languageCodes[locale], {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

/**
 * @param number
 * @param locale {'en' | 'ua' | 'fr'}
 * @returns {string}
 */
export const formatWithoutGrouping = (number, locale) =>
  new Intl.NumberFormat(languageCodes[locale], { useGrouping: false }).format(number);

/**
 * @param number
 * @param locale {'en' | 'ua' | 'fr'}
 * @returns {string}
 */
export const formatScientific = (number, locale) =>
  new Intl.NumberFormat(languageCodes[locale], { notation: "scientific" }).format(number);
