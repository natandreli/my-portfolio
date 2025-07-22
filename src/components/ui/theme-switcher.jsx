import { useTheme } from "@/hooks/use-theme";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-contrast text-primary-400 p-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
      aria-label="Toggle Theme"
    >
      <span className="flex items-center justify-center">
        {theme === "dark" ? (
          <IconSun size={32} className="w-6 h-6" />
        ) : (
          <IconMoon size={32} className="w-6 h-6" />
        )}
      </span>
    </button>
  );
};
