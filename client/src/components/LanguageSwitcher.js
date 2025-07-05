import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button
        onClick={() => changeLanguage("en")}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: i18n.language === "en" ? "#007bff" : "#f0f0f0",
          color: i18n.language === "en" ? "white" : "black",
          border: "1px solid #007bff",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("pt")}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: i18n.language === "pt" ? "#007bff" : "#f0f0f0",
          color: i18n.language === "pt" ? "white" : "black",
          border: "1px solid #007bff",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        PT
      </button>
    </div>
  );
}
