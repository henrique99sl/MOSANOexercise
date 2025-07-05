import React, { useState, useEffect } from "react";
import { useUsers } from "../context/UsersContext";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import Spinner from "../components/Spinner";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const { users: contextUsers, loading, saving, addUser, deleteUser } = useUsers();
  const [lastAdded, setLastAdded] = useState(null);
  const [users, setUsers] = useState([]);

  // Atualiza users local quando loading termina e contextUsers mudam
  useEffect(() => {
    if (!loading) {
      setUsers(contextUsers);
    }
  }, [contextUsers, loading]);

  const handleAddUser = async (userData) => {
    const newUser = await addUser(userData);
    if (newUser) {
      setLastAdded(newUser);
      // users será atualizado via efeito quando loading acabar
    }
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{t("home")}</h2>
      {lastAdded && (
        <h3>
          {t("greeting_full", {
            name: lastAdded.name,
            surname: lastAdded.surname,
            country: lastAdded.country,
            date: new Date(lastAdded.birthday).toLocaleDateString(),
          })}
        </h3>
      )}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          {saving ? <Spinner /> : <UserForm onUserAdded={handleAddUser} />}
        </div>
        <div style={{ flex: 2, minWidth: "300px" }}>
          {loading ? (
            <Spinner />
          ) : (
            <UserTable users={users} onDelete={handleDeleteUser} />
          )}
        </div>
      </div>
    </div>
  );
}
