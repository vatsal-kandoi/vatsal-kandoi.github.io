import * as React from 'react';
import { ThemeProvider } from "styled-components";
import ThemeProviderContext from "./contexts/themeprovider";
import useThemeProvider from "./hooks/themeprovider";
import Home from './views/home';

const App: React.FC<{}> = () => {
  const {themeContextValue, theme} = useThemeProvider();

  return (
      <ThemeProviderContext.Provider value={themeContextValue}>
        <ThemeProvider theme={theme}>
          <Home></Home>
        </ThemeProvider>
      </ThemeProviderContext.Provider>
  );
}

export default App;