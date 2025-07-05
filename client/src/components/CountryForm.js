import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CountryForm.module.css";

export default function CountryForm({ onCountryAdded }) {
  const { t } = useTranslation();
  const [country, setCountry] = useState({ name: "", code: "" });

  const handleChange = (e) => {
    setCountry({ ...country, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!country.name || !country.code) {
      alert(t("error") + ": " + t("please_fill_fields"));
      return;
    }
    try {
      const res = await fetch("http://localhost:4000/api/countries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(country),
      });
      const data = await res.json();
      onCountryAdded(data);
      setCountry({ name: "", code: "" });
    } catch (err) {
      console.error(err);
      alert(t("error"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer} noValidate>
      <h3 className={styles.formTitle}>{t("add_country")}</h3>
      <input
        name="name"
        value={country.name}
        onChange={handleChange}
        placeholder={t("name")}
        className={styles.inputField}
        autoComplete="off"
      />
      <input
        name="code"
        value={country.code}
        onChange={handleChange}
        placeholder={t("code")}
        className={styles.inputField}
        autoComplete="off"
      />
      <button type="submit" className={styles.submitButton}>
        {t("save")}
      </button>
    </form>
  );
}
