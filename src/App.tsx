import * as React from 'react';
import ThemeProviderContext from "./contexts/themeprovider";
import { ThemeProvider } from "styled-components";
import useThemeProvider from "./hooks/themeprovider";
import Layer from './components/layer/layer';
import { Button, IconButton } from './components/buttons';
import Stack from './components/stack/stack';
import Pill from './components/pill/pill';

const App: React.FC<{}> = () => {
  const {themeContextValue, theme} = useThemeProvider();

  return (
      <ThemeProviderContext.Provider value={themeContextValue}>
        <ThemeProvider theme={theme}>
          <Layer style={{minHeight: "100vh"}}>
            <Stack spacing={2}>
              <Pill outlined={false}>
                <>Vatsal Kandoi</>
              </Pill>
              <Pill outlined={true}>
                <>Vatsal Kandoi</>
              </Pill>
            </Stack>
          </Layer>
        </ThemeProvider>
      </ThemeProviderContext.Provider>
  );
}

export default App;