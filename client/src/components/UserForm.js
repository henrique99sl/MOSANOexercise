import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import styles from "./UserForm.module.css";

export default function UserForm({ onUserAdded }) {
  const { t } = useTranslation();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    country: "",
    birthday: "",
  });
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/countries");
        setCountries(res.data);
        console.log("[UserForm] Countries loaded:", res.data);
      } catch (err) {
        console.error("[UserForm] Failed to load countries:", err);
      }
    };
    loadCountries();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.trace("[UserForm] handleSubmit called");

    const now = Date.now();

    if (isSubmitting) {
      console.log("[UserForm] Submission already in progress, ignoring new submit");
      return;
    }

    if (now - lastSubmitTime < 1000) {
      console.log("[UserForm] Submit ignored due to debounce (too soon)");
      return;
    }

    if (!user.name || !user.surname || !user.country || !user.birthday) {
      setError(t("required_all_fields"));
      console.warn("[UserForm] Validation failed: all fields required");
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);

    try {
      const newUserData = {
        name: user.name,
        surname: user.surname,
        country: user.country,
        birthday: user.birthday,
      };

      console.log("[UserForm] Sending POST to backend:", newUserData);
      const res = await axios.post("http://localhost:4000/api/users", newUserData);

      console.log("[UserForm] User created successfully:", res.data);
      console.log("[UserForm] Calling onUserAdded");
      onUserAdded(res.data);

      setUser({
        name: "",
        surname: "",
        country: "",
        birthday: "",
      });
      setError("");
    } catch (err) {
      console.error("[UserForm] Error creating user:", err);
      setError(t("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer} noValidate>
      <h3>{t("add_user")}</h3>
      {error && <p className={styles.error}>{error}</p>}
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder={t("name")}
        className={styles.nameInput}
        disabled={isSubmitting}
        autoComplete="off"
      />
      <input
        name="surname"
        value={user.surname}
        onChange={handleChange}
        placeholder={t("surname")}
        className={styles.surnameInput}
        disabled={isSubmitting}
        autoComplete="off"
      />
      <select
        name="country"
        value={user.country}
        onChange={handleChange}
        className={styles.countrySelect}
        disabled={isSubmitting}
      >
        <option value="">{t("select_country")}</option>
        {countries.map((c) => (
          <option key={c._id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="birthday"
        value={user.birthday}
        onChange={handleChange}
        className={styles.birthdayInput}
        disabled={isSubmitting}
      />
      <button type="submit" className={styles.saveButton} disabled={isSubmitting}>
        {isSubmitting ? t("saving") : t("save")}
      </button>
    </form>
  );
}
