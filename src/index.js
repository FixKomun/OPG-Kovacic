import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
//i18next
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import common_hr from "./translations/hr/common.json";
import common_en from "./translations/en/common.json";
import common_de from "./translations/de/common.json";
const root = ReactDOM.createRoot(document.getElementById("root"));
//Theme
import theme from "./theme";
import { ThemeProvider } from "styled-components";
//Accessibility with AXE
if (process.env.NODE_ENV !== "production") {
  let axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

//i18 translations
i18next.init({
  interpolation: { escapeValue: false }, //React does escaping already
  lng: "hr",
  resources: {
    hr: {
      common: common_hr,
    },
    en: {
      common: common_en,
    },
    de: {
      common: common_de,
    },
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
