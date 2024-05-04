import * as React from 'react';
import ThemeProviderContext from "./contexts/themeprovider";
import { ThemeProvider } from "styled-components";
import useThemeProvider from "./hooks/themeprovider";
import Layer from './components/layer/layer';
import { Button, IconButton } from './components/buttons';

const App: React.FC<{}> = () => {
  const {themeContextValue, theme} = useThemeProvider();

  return (
      <ThemeProviderContext.Provider value={themeContextValue}>
        <ThemeProvider theme={theme}>
          <Layer style={{minHeight: "100vh"}}>
            <>
              <Button onClick={() => {}}>
                <>Click here</>
              </Button>
              <IconButton onClick={() => {}}></IconButton>
            </>
          </Layer>
        </ThemeProvider>
      </ThemeProviderContext.Provider>
  );
}

export default App;