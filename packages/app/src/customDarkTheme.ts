import { darkTheme } from '@super-ui/theme';

export const customDarkTheme = {
  ...darkTheme,
  title: 'darkTheme',
  colors: {
    ...darkTheme.colors,
    super100: '#FF7E7B',
  },
} as const;
