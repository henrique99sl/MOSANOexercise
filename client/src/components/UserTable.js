import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./UserTable.module.css";

export default function UserTable({ users, onDelete }) {
  const { t, i18n } = useTranslation();

  console.log("[UserTable] renderizando com users:", users);
  console.log("[UserTable] onDelete recebido:", onDelete);

  const handleDelete = (id) => {
    console.log("[UserTable] handleDelete chamado com id:", id);
    if (typeof onDelete === "function") {
      onDelete(id);
    } else {
      console.warn("[UserTable] onDelete não é uma função!");
    }
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t("name")}</th>
            <th>{t("country")}</th>
            <th>{t("birthday")}</th>
            <th>{t("action")}</th>
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
                <td>
                  {u.name} {u.surname}
                </td>
                <td>{u.country}</td>
                <td>
                  {new Date(u.birthday).toLocaleDateString(
                    i18n.language === "pt" ? "pt-PT" : "en-US"
                  )}
                </td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(u._id)}
                  >
                    {t("delete")}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
