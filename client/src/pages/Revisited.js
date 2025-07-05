import React from "react";
import { useUsers } from "../context/UsersContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import styles from "../components/UserTable.module.css"; // usa o css da UserTable

export default function Revisited() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { users, loading } = useUsers();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <button
        onClick={handleBack}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
        aria-label={t("back")}
      >
        {t("back")}
      </button>

      <h2>{t("revisited")}</h2>

      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t("name")}</th>
                <th>{t("surname")}</th>
                <th>{t("country")}</th>
                <th>{t("birthday")}</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className={styles.noData}>
                    {t("no_users")}
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.surname}</td>
                    <td>{u.country}</td>
                    <td>
                      {new Date(u.birthday).toLocaleDateString(
                        i18n.language === "pt" ? "pt-PT" : "en-US"
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
