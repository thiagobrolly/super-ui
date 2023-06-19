import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@super-ds/tokens';

export const lightTheme = {
  title: 'lightTheme',

  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },

  layers: {
    hide: -1,
    auto: 'auto',
    base: 1,
    dropdown: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwayOnTop: 50,
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },

  border: {
    radius: {
      xsmall: '0.2rem',
      small: '0.5rem',
      medium: '0.8rem',
      large: '2rem',
      circle: '50%',
    },
  },

  shadow: {
    base: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    sm: '0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    md: '0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
    lg: '0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
  },

  opacity: {
    zero: '0',
    high: '0.25',
    medium: '0.5',
    low: '0.75',
    normal: '1',
  },
} as const;
