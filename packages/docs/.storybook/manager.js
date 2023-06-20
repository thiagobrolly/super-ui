import { addons } from '@storybook/manager-api';
import superTheme from './superTheme';

addons.setConfig({
  theme: superTheme,
});