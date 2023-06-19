import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '..';

export type LightThemeProps = typeof lightTheme;
export type DarkThemeProps = typeof darkTheme;

export type DefaultThemeProps = LightThemeProps | DarkThemeProps;

interface IThemeContext {
  toggleTheme: () => void;
  theme: DefaultThemeProps;
}

export const ThemeContext = createContext({} as IThemeContext);

interface SuperThemeProviderProps {
  children: ReactNode;
  dark?: DarkThemeProps;
  light?: LightThemeProps;
}

export function SuperThemeProvider({
  children,
  dark,
  light,
}: SuperThemeProviderProps) {
  const currentDark = dark || darkTheme;
  const currentLight = light || lightTheme;

  const [theme, setTheme] = useState<DefaultThemeProps>(currentLight);

  function toggleTheme() {
    setTheme(theme.title === 'lightTheme' ? currentDark : currentLight);
    console.log(theme.title);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}
