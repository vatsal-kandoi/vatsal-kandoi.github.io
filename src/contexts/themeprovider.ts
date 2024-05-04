import * as React from "react";

const ThemeProviderContext = React.createContext<{
    toggleTheme: () => void,
}>({ toggleTheme: () => {} });

export default ThemeProviderContext;
