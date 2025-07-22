import { THEME_LOCAL_STORAGE_KEY } from "@/config";
import { ThemeContext } from "@/contexts/theme";
import { useState } from "react";

export const ThemeProvider = ({ children }) => {
  function updateAppTheme(theme) {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark && theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (!isDark && theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }

  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    let initialTheme = "light";

    if (savedTheme) {
      initialTheme = savedTheme;
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (prefersDarkMode) {
        initialTheme = "dark";
      }
    }
    updateAppTheme(initialTheme);
    return initialTheme;
  }

  const [theme, setTheme] = useState(() => getInitialTheme());

  function setThemeAndSave(theme) {
    setTheme(theme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    updateAppTheme(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setThemeAndSave,
        toggleTheme: () => {
          setThemeAndSave(theme === "dark" ? "light" : "dark");
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
