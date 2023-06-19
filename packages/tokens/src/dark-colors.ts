import { colors } from './colors';

export const darkColors = {
  ...colors,

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
} as const;
