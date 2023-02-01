import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import Cookies from 'js-cookie';

import { customTheme, darkTheme, lightTheme } from '@/themes';

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';

    const selectedTheme: Theme =
      cookieTheme === 'light'
        ? lightTheme
        : cookieTheme === 'dark'
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
