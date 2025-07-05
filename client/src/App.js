import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Revisited from "./pages/Revisited";

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Navbar />
        <LanguageSwitcher />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/revisited" element={<Revisited />} />
      </Routes>
    </div>
  );
}
