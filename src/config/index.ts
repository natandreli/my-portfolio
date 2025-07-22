export const THEME_LOCAL_STORAGE_KEY = "theme";

export function loadThemeConfig() {
  const savedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  return {
    theme: savedTheme || "dark",
  };
}
