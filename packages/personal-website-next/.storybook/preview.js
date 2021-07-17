import "../styles/globals.css";
import "../styles.scss";
import "../cara/styles/animations";
import "../cara/styles/utils";
import Theme from "../theme-ui";
import { ThemeProvider } from "theme-ui";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <Story />
    </ThemeProvider>
  ),
];
