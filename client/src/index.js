import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UsersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UsersProvider>
);
