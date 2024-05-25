import * as React from 'react';
import { ThemeProvider } from "styled-components";
import useThemeProvider from './hooks/themeprovider';
import ThemeProviderContext from './contexts/themeprovider';
import Home from './views/home';
import { BrowserRouter } from 'react-router-dom'
import DataProviderContext from './contexts/dataprovider';
import { ABOUT, EDUCATION, EXPERIENCE } from './data';

const App: React.FC<{}> = () => {
  const {themeContextValue, theme} = useThemeProvider();

  return (
    <DataProviderContext.Provider value={{
      about: ABOUT,
      experience: EXPERIENCE,
      education: EDUCATION,
    }}>
      <ThemeProviderContext.Provider value={themeContextValue}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Home></Home>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeProviderContext.Provider>
    </DataProviderContext.Provider>
  );
}

export default App;