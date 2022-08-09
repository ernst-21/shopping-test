import React from 'react';
import {Typography} from "@mui/material";
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import {lightTheme} from "./themes";
import {MainLayout} from "./components/layout";

function App() {

  return (
      <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <MainLayout>
              <Typography>
                  Test
              </Typography>
          </MainLayout>
      </ThemeProvider>

  );
}

export default App;
