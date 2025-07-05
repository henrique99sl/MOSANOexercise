import React from "react";
import useCountries from "../hooks/useCountries";
import CountryForm from "../components/CountryForm";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Countries() {
  const { t } = useTranslation();
  const { countries, loading, addCountry, deleteCountry } = useCountries();
  const navigate = useNavigate();

  const formContainerStyle = {
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "white",
  };

  const listContainerStyle = {
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    maxHeight: "70vh",
    overflowY: "auto",
  };

  const backButtonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "1rem",
  };

  return (
    <div style={{ padding: "1rem" }}>
      <button
        onClick={() => navigate(-1)}
        style={backButtonStyle}
        aria-label={t("back")}
      >
        {t("back")}
      </button>

      <h2>{t("countries")}</h2>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px", ...formContainerStyle }}>
          <CountryForm onCountryAdded={addCountry} />
        </div>
        <div style={{ flex: 2, minWidth: "300px", ...listContainerStyle }}>
          {loading ? (
            <Spinner />
          ) : (
            <CountryList
              countries={countries}
              onDelete={deleteCountry}
              onSelect={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
}
