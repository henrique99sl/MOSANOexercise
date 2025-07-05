import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./CountryList.module.css";

export default function CountryList({ countries, onDelete, onSelect }) {
  const { t } = useTranslation();

  if (!Array.isArray(countries)) return null;

  return (
    <section className={styles.listContainer}>
      <h3 className={styles.listTitle}>{t("countries")}</h3>
      <ul className={styles.list}>
        {countries.map((c) => (
          <li key={c._id} className={styles.listItem}>
            <button
              onClick={() => onSelect(c)}
              className={styles.selectButton}
              type="button"
            >
              {c.name} ({c.code})
            </button>
            <button
              onClick={() => onDelete(c._id)}
              className={styles.deleteButton}
              type="button"
            >
              {t("delete")}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
