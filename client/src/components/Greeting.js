// src/components/Greeting.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function Greeting({ user }) {
  const { t } = useTranslation();

  if (!user) return null;

  return (
    <h3>
      {t("greeting_full", {
        name: user.name,
        surname: user.surname,
        country: user.country,
        date: new Date(user.birthday).toLocaleDateString(),
      })}
    </h3>
  );
}
