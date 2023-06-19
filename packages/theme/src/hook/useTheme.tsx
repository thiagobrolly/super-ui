import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { defaultTheme, darkTheme } from '..';

export type DefaultThemeProps = typeof defaultTheme;
export type DarkThemeProps = typeof darkTheme;

export type ThemeDarkLightProps = DefaultThemeProps | DarkThemeProps;

interface IThemeContext {
  toggleTheme: () => void;
  theme: ThemeDarkLightProps;
}

export const ThemeContext = createContext({} as IThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
  customTheme?: ThemeDarkLightProps;
}

export function ThemeProvider({ children, customTheme }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeDarkLightProps>(defaultTheme);

  const currentTheme = customTheme || theme;

  function toggleTheme() {
    setTheme(currentTheme.title === 'defaultTheme' ? darkTheme : defaultTheme);
    console.log(currentTheme.title);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledProvider theme={currentTheme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}
