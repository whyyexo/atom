import React, { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';
import { appleTheme, androidTheme, ThemeTokens } from './tokens';

export const ThemeContext = React.createContext<ThemeTokens>(appleTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, []);

  const currentTheme = theme === 'apple' ? appleTheme : androidTheme;

  return <ThemeContext.Provider value={currentTheme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return React.useContext(ThemeContext);
}

