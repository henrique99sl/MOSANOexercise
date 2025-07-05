import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  const linkStyle = {
    textDecoration: "none",
    padding: "0.5rem 1rem",
    marginRight: "0.5rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "1px solid #007bff",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <nav style={{ marginBottom: "1rem" }}>
      {location.pathname !== "/" && (
        <Link to="/" style={linkStyle}>{t("home")}</Link>
      )}
      {location.pathname !== "/countries" && (
        <Link to="/countries" style={linkStyle}>{t("countries")}</Link>
      )}
      {location.pathname !== "/revisited" && (
        <Link to="/revisited" style={linkStyle}>{t("revisited")}</Link>
      )}
    </nav>
  );
}
