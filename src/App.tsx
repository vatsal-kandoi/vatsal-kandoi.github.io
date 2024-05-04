import * as React from 'react';
import ThemeProviderContext from "./contexts/themeprovider";
import { ThemeProvider } from "styled-components";
import useThemeProvider from "./hooks/themeprovider";
import Layer from './components/layer/layer';

const App: React.FC<{}> = () => {
  const {themeContextValue, theme} = useThemeProvider();

  return (
      <ThemeProviderContext.Provider value={themeContextValue}>
        <ThemeProvider theme={theme}>
          <Layer>
            <></>
          </Layer>
        </ThemeProvider>
      </ThemeProviderContext.Provider>
  );
}

export default App;