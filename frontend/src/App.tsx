import "./i18n";
import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, makeStyles, StylesProvider, jssPreset } from "@material-ui/core/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { composeProviders } from "contexts";
import { responsiveTheme, responsiveThemeAR } from "theme/material";

import { Routes } from "routes";

import WithBackBtnTemplate from "core/components/Templates/WithBackBtnTemplate"

export const WrappedApp = composeProviders()(App);

function App({ history }: any) {

  console.warn = () => { };
  console.info = () => { };
  // console.error = () => {};
  // console.log = () => {};
  // console.trace = () => {};

  const win: any = window;
  const { i18n } = useTranslation();
  const isRTL = i18n.dir(win["lang"] as string) === "rtl";
  document.body.setAttribute("dir", isRTL ? "rtl" : "ltr");
  const jss = isRTL
    ? create({ plugins: [...jssPreset().plugins, rtl()] })
    : create({ plugins: [...jssPreset().plugins] });

  return (
    <Router>
      <WithBackBtnTemplate history={history}>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={isRTL ? responsiveThemeAR : responsiveTheme}>
            <Routes />
          </ThemeProvider>
        </StylesProvider>
      </WithBackBtnTemplate>
    </Router>
  );
}



