import { FC, ReactNode, createContext, useState, useEffect, useMemo } from "react";

const INITIAL_STATE_CONTEXT = {
  dark: false,
  toggleTheme: (): void => {},
};

type StateContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<StateContextType>(INITIAL_STATE_CONTEXT);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("-portfolio-theme-dark");
    let isDark = false;
    if (!theme) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("-portfolio-theme-dark", JSON.stringify(matches));
      isDark = matches;
      document.documentElement.dataset.dark = matches ? "true" : "false";
    } else {
      document.documentElement.dataset.dark = theme;
      isDark = JSON.parse(theme);
    }
    setDark(isDark);
  }, []);

  const toggleTheme = (): void => {
    setDark(!dark);
    const theme = localStorage.getItem("-portfolio-theme-dark");
    if (theme) {
      const newTheme = String(!JSON.parse(theme));
      document.documentElement.dataset.dark = newTheme;
      localStorage.setItem("-portfolio-theme-dark", newTheme);
    }
  };

  const value = useMemo(() => {
    return {
      dark,
      toggleTheme,
    };
  }, [dark]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
