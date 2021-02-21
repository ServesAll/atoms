import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme as defaultTheme } from './definitions';

const ThemeWrapper = ({children, theme = {}}) => {
    return (
        <ThemeProvider theme={{...defaultTheme, ...theme}}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeWrapper;
