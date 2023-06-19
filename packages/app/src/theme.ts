// theme.ts

// Definindo os tipos do tema
export interface Theme {
  colors: {
    white: string;
    dark: string;

    background: string;
    text: string;

    super100: string;
    super300: string;
    super800: string;
    info100: string;
    info300: string;
    info800: string;
    error100: string;
    error300: string;
    error800: string;
    success100: string;
    success300: string;
    success800: string;

    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
  };
}

// Tema "light"
export const themeLight: Theme = {
  colors: {
    white: '#ffffff',
    dark: '#000000',

    background: '#ffffff',
    text: '#1f1f1f',

    super100: '#99FFCC',
    super300: '#0FAE79',
    super800: '#00875A',
    info100: '#BCE9FD',
    info300: '#0288D1',
    info800: '#01579B',
    error100: '#FF7E7B',
    error300: '#ED3434',
    error800: '#BF2424',
    success100: '#E0FFC9',
    success300: '#368F3A',
    success800: '#1B5E20',

    gray50: '#F2F2F2',
    gray100: '#E5E5E5',
    gray200: '#CCCCCC',
    gray300: '#B2B2B2',
    gray400: '#999999',
    gray500: '#808080',
    gray600: '#666666',
    gray700: '#4D4D4D',
    gray800: '#333333',
    gray900: '#1A1A1A',
  },
};

// Tema "dark"
export const themeDark: Theme = {
  colors: {
    white: '#ffffff',
    dark: '#000000',

    background: '#1f1f1f',
    text: '#ffffff',

    super100: '#99FFCC',
    super300: '#0FAE79',
    super800: '#00875A',
    info100: '#BCE9FD',
    info300: '#0288D1',
    info800: '#01579B',
    error100: '#FF7E7B',
    error300: '#ED3434',
    error800: '#BF2424',
    success100: '#E0FFC9',
    success300: '#368F3A',
    success800: '#1B5E20',

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
};
