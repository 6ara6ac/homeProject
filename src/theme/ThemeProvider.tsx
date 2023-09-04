import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from './ThemeContext';
import { FC, useMemo, useState } from 'react';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const deafaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={deafaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
