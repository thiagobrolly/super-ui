/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { LightThemeProps } from '@super-ui/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends LightThemeProps {}
}
