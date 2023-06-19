import { lightTheme } from './lightTheme';

export const darkTheme = {
  ...lightTheme,
  title: 'darkTheme',
  colors: {
    ...lightTheme.colors,
    background: '#1f1f1f',
    text: '#ffffff',

    gray50: '#1A1A1A',
    gray100: '#333333',
    gray200: '#4D4D4D',
    gray300: '#666666',
    gray400: '#808080',
    gray500: '#999999',
    gray600: '#B2B2B2',
    gray700: '#CCCCCC',
    gray800: '#E5E5E5',
    gray900: '#F2F2F2',
  },
} as const;
