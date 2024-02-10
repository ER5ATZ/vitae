import { useState } from 'react';

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const useThemeContext = () => {
  const initialThemeContext: ThemeContextProps = {
    isDarkTheme: localStorage.getItem('isDarkTheme') === 'true',
    toggleTheme: () => {},
  };

  const [isDarkTheme, setTheme] = useState(initialThemeContext.isDarkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      localStorage.setItem('isDarkTheme', JSON.stringify(!prevTheme));
      return !prevTheme;
    });
  };

  return { isDarkTheme, toggleTheme };
};

export default useThemeContext;
