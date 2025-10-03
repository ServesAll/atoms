import React from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { theme as defaultTheme } from "./definitions";
const ThemeWrapperContext = React.createContext();

const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const ThemeWrapper = ({ children, theme = {} }) => {
  return (
    <ThemeWrapperContext.Provider value={{ ...theme }}>
      <ThemeProvider
        theme={{ ...defaultTheme(colorScheme), ...theme, colorScheme }}
      >
        {children}
      </ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
};

const useThemeContext = () => {
  return React.useContext(ThemeContext);
};

export { ThemeContext, ThemeWrapper, useThemeContext };
