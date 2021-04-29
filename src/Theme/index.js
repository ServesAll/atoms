import React from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components/native';
import { theme as defaultTheme } from './definitions';
const ThemeWrapperContext = React.createContext();

const ThemeWrapper = ({children, theme = {}}) => {
    return (
        <ThemeWrapperContext.Provider
            value={{...theme}}>
            <ThemeProvider theme={{...defaultTheme, ...theme}}>
                {children}
            </ThemeProvider>
        </ThemeWrapperContext.Provider>
    );
};

const useThemeContext = () => {
    return React.useContext(ThemeContext);
};

export {ThemeContext, ThemeWrapper, useThemeContext};
