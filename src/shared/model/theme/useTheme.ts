import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme,
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const context = useContext(ThemeContext);

  if (context === null) throw new Error('Cant find context');

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
