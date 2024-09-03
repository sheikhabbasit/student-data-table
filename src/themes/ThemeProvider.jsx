import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { defaultTheme } from "./defaultTheme";

function ThemeProviders({ children }) {
  const currentTheme = createTheme(defaultTheme);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}

export default ThemeProviders;
