import * as React from "react";
import { Theme, Mode, getDefaultTheme, createTheme } from "../themes";

/**
 * Custom hook to provide the theme for the react application and get the default value for the 
 * ThemeProvider. This would be utilized by components
 */
function useThemeProvider(): { themeContextValue: { toggleTheme: () => void }, theme: Theme} {
    const [theme, setTheme] = React.useState<Theme>(getDefaultTheme());

    const themeContextValue = {
        toggleTheme: () => {
            setTheme((prevTheme) => (
                createTheme(prevTheme.mode === Mode.LIGHT ? Mode.DARK : Mode.LIGHT)
            ));
        },
    }

    return { themeContextValue, theme };
}

export default useThemeProvider;