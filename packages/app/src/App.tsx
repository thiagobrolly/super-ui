// import { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { themeDark, themeLight } from './theme';
import {
  ThemeProvider,
  // darkTheme,
  // defaultTheme,
  // ThemeDarkLightProps,
} from '@super-ui/theme';
import { Home } from './pages/Home';
import { customDarkTheme } from './customDarkTheme';
// import { colors, darkColors } from '@super-ui/tokens';

export function App() {
  // const [theme, setTheme] = useState<ThemeDarkLightProps>(defaultTheme);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === themeDark ? themeLight : themeDark));
  // };

  // function toggleTheme() {
  //   setTheme(theme.title === 'defaultTheme' ? darkTheme : defaultTheme);
  //   console.log(theme.title);
  //   // setTheme((prevTheme) => (prevTheme === colors ? darkColors : colors));
  // }

  return (
    <ThemeProvider customTheme={customDarkTheme}>
      <Home />
    </ThemeProvider>
  );
}
