import {defaultFonts} from './fonts';

export const defaultTheme = {
  colors: {},
  fonts: defaultFonts,
};

type TDefault = typeof defaultTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends TDefault {}
}
