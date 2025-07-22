import { ThemeProvider } from "@/contexts/theme/provider";

export const GlobalProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
