import { themes } from '@storybook/theming';
import { SuperThemeProvider } from '@super-ds/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs:  {
    theme: themes.dark
  },
  brandTitle: 'Super Design System',
}

export const decorators = [
  (Story) => (
    <SuperThemeProvider>
      <Story />
    </SuperThemeProvider>
  ),
];