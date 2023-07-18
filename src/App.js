import { LanguageSelector } from "./components/LanguageSelector";
import "./App.css";
import { useTranslation } from "react-i18next";
import { CardFormatNumbers } from "./components/CardFormatNumbers";
import { CardFormatDateTime } from "./components/CardFormatDateTime";
import { CardConverterUnitsMeasurement } from "./components/CardConverterUnitsMeasurement";
import { CardNoTranslation } from "./components/CardNoTranslation";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div className="header">
        <h1>{t("welcome")}</h1>
        <div>
          <LanguageSelector />
        </div>
      </div>

      <div className="container">
        <CardFormatDateTime />

        <CardFormatNumbers />

        <CardNoTranslation />
      </div>
      <div className="container">
        <CardConverterUnitsMeasurement />
      </div>
    </div>
  );
}

export default App;
