import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const deafaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={deafaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
