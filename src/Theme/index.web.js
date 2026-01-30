// prettier-ignore
"use client";
import React from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { theme as defaultTheme } from "./definitions";
import { FontStyles } from "./definitions/fonts.import";
import { useColorScheme } from "./colorScheme.web";

const ThemeWrapperContext = React.createContext();

const ThemeWrapper = ({ children, theme = {} }) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeWrapperContext.Provider value={{ ...theme }}>
      <ThemeProvider
        theme={{ ...defaultTheme(colorScheme), ...theme, colorScheme }}
      >
        <FontStyles />
        {children}
      </ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
};

const useThemeContext = () => {
  return React.useContext(ThemeContext);
};

export { ThemeContext, ThemeWrapper, useThemeContext };
