import { formatDate, formatDateTimeLong, formatDateTimeShort, formatTime } from "../utils";
import { useTranslation } from "react-i18next";

const currentDate = new Date();

export const CardFormatDateTime = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="card">
      <h3>{t("title.formatDateTime")}</h3>
      <ul>
        <li>{formatDateTimeLong(currentDate, i18n.language)}</li>
        <li>{formatDateTimeShort(currentDate, i18n.language)}</li>
        <li>{formatTime(currentDate, i18n.language)}</li>
        <li>{formatDate(currentDate, i18n.language)}</li>
      </ul>
    </div>
  );
};
