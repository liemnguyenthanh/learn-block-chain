import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';
import createThemeApp from '@/styles/muiTheme';
// Client-side cache, shared for the whole session of the user in the browser.

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const theme = React.useMemo(() => (createThemeApp()), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
