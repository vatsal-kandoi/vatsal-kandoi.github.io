import * as React from 'react';
import { ThemeProvider } from "styled-components";
import useThemeProvider from './hooks/themeprovider';
import ThemeProviderContext from './contexts/themeprovider';
import Home from './views/home';
import { BrowserRouter } from 'react-router-dom'

const App: React.FC<{}> = () => {
  const {themeContextValue, theme} = useThemeProvider();

  return (
      <ThemeProviderContext.Provider value={themeContextValue}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Home></Home>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeProviderContext.Provider>
  );
}

export default App;