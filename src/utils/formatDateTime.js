import { languageCodes } from "../locales/i18n.constants";

/**
 * @param date {Date}
 * @param locale {'en' | 'ua' | 'fr'}
 * @returns {string} - en: Tuesday, July 18, 2023 at 1:58 PM
 */
export const formatDateTimeLong = (date, locale) => {
  const format = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Intl.DateTimeFormat(languageCodes[locale], format).format(date);
};

/**
 * @param date {Date}
 * @param locale {'en' | 'ua' | 'fr'}
 * @returns {string} - en: July 18, 2023 at 1:59 PM
 */
export const formatDateTimeShort = (date, locale) => {
  const format = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Intl.DateTimeFormat(languageCodes[locale], format).format(date);
};

/**
 * @param date {Date}
 * @param locale {'en' | 'ua' | 'fr'}
 * @returns {string} - en: 1:59 PM
 */
export const formatTime = (date, locale) => {
  const format = { hour: "numeric", minute: "numeric" };

  return new Intl.DateTimeFormat(languageCodes[locale], format).format(date);
};

/**
 * @param date {Date}
 * @param locale {'en' | 'ua' | 'fr'}
 * @returns {string} - en: 7/18/2023
 */
export const formatDate = (date, locale) => {
  const format = { year: "numeric", month: "numeric", day: "numeric" };

  return new Intl.DateTimeFormat(languageCodes[locale], format).format(date);
};
