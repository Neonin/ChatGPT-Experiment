import { useTranslation } from "react-i18next";

export const CardNoTranslation = () => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <p>{t("Lorem ipsum dolor sit amet")}</p>
    </div>
  );
};
