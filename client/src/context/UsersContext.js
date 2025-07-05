import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UsersContext = createContext();

// Função delay para garantir spinner mínimo
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Buscar todos os usuários do backend com delay mínimo para spinner
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const [res] = await Promise.all([
        axios.get("http://localhost:4000/api/users"),
        delay(800), // spinner no mínimo 800ms
      ]);
      setUsers(res.data);
    } catch (err) {
      console.error("[UsersContext] Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };

  // Buscar users quando o componente monta
  useEffect(() => {
    fetchUsers();
  }, []);

  // Adicionar usuário e atualizar lista sem bloquear retorno
  const addUser = async (userData) => {
    setSaving(true);
    try {
      const res = await axios.post("http://localhost:4000/api/users", userData);
      // Atualiza lista assincronamente sem await
      fetchUsers();
      return res.data;
    } catch (err) {
      console.error("[UsersContext] Failed to add user:", err);
      return null;
    } finally {
      setSaving(false);
    }
  };

  // Apagar usuário e atualizar lista assincronamente
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("[UsersContext] Failed to delete user:", err);
    }
  };

  return (
    <UsersContext.Provider value={{ users, loading, saving, addUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

// Hook para consumir o contexto
export const useUsers = () => useContext(UsersContext);
